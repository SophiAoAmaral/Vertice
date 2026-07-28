import express from 'express';

import mongoose  from 'mongoose';

const app = express();
app.use(express.json());




mongoose.connect('mongodb+srv://sophiaoliveira2706_db_user:76HX0I3hKgFGmeNO@cluster-produtos.rkztcmf.mongodb.net/Produto?appName=cluster-produtos')
  .then(() => console.log('Conectado'))
  .catch((err) => {
    console.error(err);
  });


  const produtosSchema = new mongoose.Schema({
    nome:{type: String, required: true},
    tipo:{type: String, required: true},
    descricao:{type:String, required: true},
    categoria:{type:String, required: true},
    preco:{type:Number, required: true},
    marca:{type:String, required: true},
    composicao:{type:String, required: true},
    tamanho:{type:[Number], required: true},
    image:{type: String,  required:true},
  }, {timestamps:true}

);

const Produto = mongoose.model('Produto', produtosSchema);

app.get('/produto', async (req, res) => {
    const produtosDoBanco = await Produto.find()
    res.json(produtosDoBanco)
});


app.listen(3003,()=>{
    console.log('servidor rodando')
});