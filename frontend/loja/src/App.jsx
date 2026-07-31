import { useState, useEffect } from "react"
import axios from 'axios'
import { Header } from "../components/Header/Header";
import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";

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
        <Route path='/produtos' element={<></>}/>
        <Route path="/sobre" element={<></>} />
        <Route path="/contato" element={<></>} />
        <Route path="/carrinho" element={<></>}/>
      </Routes>

    </>
  )
}

export default App
