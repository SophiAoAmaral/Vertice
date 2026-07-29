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

const PORT = process.env.PORT || 3003;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Mongo conectado');
    app.listen(PORT, () => console.log(`Servidor na ${PORT}`));
  })
  .catch(err => {
    console.error('Falha no Mongo:', err.message);
    process.exit(1);
  });