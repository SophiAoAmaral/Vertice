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

function App() {
    const [dados, setDados] = useState([]);
    const [carrinho, setCarrinho] = useState([]);

      useEffect(()=>{
    async function Busca() {
      const resposta = await axios.get(`${import.meta.env.VITE_API_URL}/produto`);
      const data = await resposta.data;
      setDados(data)
      console.log(data)
    }

    Busca()
  },[]);

  function adicionarCarrinho(produto) {
  setCarrinho((carrinhoAtual) => [
    ...carrinhoAtual,
    produto
  ]);
}

  return (
    <>
      <Header carrinho={carrinho}/>



      <Routes>
        <Route path="/" element={<Home dados={dados} setDados={setDados} adicionarCarrinho={adicionarCarrinho}/>} />
        <Route path='/produtos' element={<Produtos dados={dados} setDados={setDados}  adicionarCarrinho={adicionarCarrinho}/>}/>
        <Route path="/sobre" element={<></>} />
        <Route path="/contato" element={<></>} />
        <Route path="/carrinho" element={<Carrinho carrinho={carrinho}/> }/>
        <Route path="/produto/:id" element={<Produto dados={dados} setDados={setDados}/>} adicionarCarrinho={adicionarCarrinho}/>
        <Route path="/itens/:categoria" element={<Tipos dados={dados} setDados={setDados} adicionarCarrinho={adicionarCarrinho}/>} />
      </Routes>


      <Footer/>
    </>
  )
}

export default App
