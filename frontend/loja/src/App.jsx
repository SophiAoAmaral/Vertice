import { useState, useEffect } from "react"
import axios from 'axios'
import { Header } from "../components/Header/Header";
import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { Produtos } from "../pages/Produtos";
import { Produto } from "../pages/Produto";
import { Tipos } from "../pages/Tipos";
import { Carrinho } from "../pages/Carrinho";
import { Footer } from "../components/Header/Footer";
import { Sobre } from "../pages/Sobre";
import { Contato } from "../pages/Contato";
import { Checkout } from "../pages/Checkout";

function App() {
    const [dados, setDados] = useState([]);
    const [carrinho, setCarrinho] = useState(() => {
  try {
    const salvo = localStorage.getItem('carrinho');
    return salvo ? JSON.parse(salvo) : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}, [carrinho]);




    const [tamanhoSelecionado, setTamanhoSelecionado] = useState({});

      useEffect(()=>{
    async function Busca() {
      const resposta = await axios.get(`${import.meta.env.VITE_API_URL}/produto`);
      const data = await resposta.data;
      setDados(data)
      console.log(data)
    }

    Busca()
  },[]);

function adicionarCarrinho(produto, tamanhoSelecionado) {
  setCarrinho((atual) => {
    const itemExiste = atual.find(
      (item) =>
        item._id === produto._id &&
        item.tamanhoSelecionado === tamanhoSelecionado
    );

    if (itemExiste) {
      return atual.map((item) =>
        item._id === produto._id &&
        item.tamanhoSelecionado === tamanhoSelecionado
          ? {
              ...item,
              quantidade: item.quantidade + 1,
            }
          : item
      );
    }

    return [
      ...atual,
      {
        ...produto,
        tamanhoSelecionado,
        quantidade: 1,
      },
    ];
  });
}

  return (
    <>
      <Header carrinho={carrinho}/>



      <Routes>
        <Route path="/" element={<Home dados={dados} setDados={setDados} adicionarCarrinho={adicionarCarrinho}/>} />
        <Route path='/produtos' element={<Produtos dados={dados} setDados={setDados}  adicionarCarrinho={adicionarCarrinho}/>}/>
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="/carrinho" element={<Carrinho carrinho={carrinho} setCarrinho={setCarrinho}/> }/>
        <Route path="/produto/:id" element={<Produto dados={dados} setDados={setDados}  adicionarCarrinho={adicionarCarrinho}  />}/>
        <Route path="/itens/:categoria" element={<Tipos dados={dados} setDados={setDados} adicionarCarrinho={adicionarCarrinho}/>} />
        <Route path="/checkout" element={<Checkout carrinho={carrinho} setCarrinho={setCarrinho}/>}/>
      </Routes>


      <Footer/>
    </>
  )
}

export default App
