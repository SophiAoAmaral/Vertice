import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

const produtosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
  descricao: { type: String, required: true },
  categoria: { type: String, required: true },
  preco: { type: Number, required: true },
  marca: { type: String, required: true },
  composicao: { type: String, required: true },
  tamanho: { type: [Number], required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const Produto = mongoose.model('Produto', produtosSchema);

app.get('/produto', async (req, res) => {
  try {
    res.json(await Produto.find());
  } catch (err) {
    console.error('[GET /produto]', err.message);
    res.status(500).json({ erro: 'Erro ao buscar produtos' });
  }
});

app.get('/health', (req, res) => {
  const estados = ['desconectado', 'conectado', 'conectando', 'desconectando'];
  res.json({ mongo: estados[mongoose.connection.readyState] });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, '0.0.0.0', () => console.log(`Servidor na ${PORT}`));

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const conn = mongoose.connection;
    console.log('Banco:', conn.name);
    const cols = await conn.db.listCollections().toArray();
    console.log('Coleções:', cols.map(c => c.name));
    console.log('Docs encontrados:', await Produto.countDocuments());
  })
  .catch(err => console.error('Falha no Mongo:', err.message));