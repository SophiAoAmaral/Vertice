import { useState, useEffect } from "react"
import axios from 'axios'

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



    </>
  )
}

export default App
