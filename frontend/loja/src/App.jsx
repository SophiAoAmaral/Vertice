import { useState, useEffect } from "react"
import axios from 'axios'
import { Header } from "../components/Header/Header";
import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";
import { Produtos } from "../pages/Produtos";
import { Produto } from "../pages/Produto";

function App() {
    const [dados, setDados] = useState([])

      useEffect(()=>{
    async function Busca() {
      const resposta = await axios.get(`${import.meta.env.VITE_API_URL}/produto`);
      const data = await resposta.data;
      setDados(data)
      console.log(data)
    }

    Busca()
  },[])

  return (
    <>
      <Header/>



      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/produtos' element={<Produtos dados={dados} setDados={setDados} />}/>
        <Route path="/sobre" element={<></>} />
        <Route path="/contato" element={<></>} />
        <Route path="/carrinho" element={<></>}/>
        <Route path="/produto/:id" element={<Produto dados={dados} setDados={setDados}/>} />
      </Routes>

    </>
  )
}

export default App
