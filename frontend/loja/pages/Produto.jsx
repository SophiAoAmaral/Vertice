import React from 'react'
import { useParams } from "react-router";
import { useState } from 'react';

export const Produto = ({dados, adicionarCarrinho}) => {
    const { id } = useParams();

  const produto = dados.find(
  (p) => p._id === id
);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
   if (!produto) {
    return <h1>Carregando...</h1>;
  }
  return (
    <div className='container mt-10'>
        <div className='flex gap-20'>
            <img src={produto.image} alt={produto.nome} className='w-150 h-130 object-contain'/>
            <div>
                <h1 className='text-4xl font-bold mt-5'>{produto.nome}</h1>
                {produto.tamanho?.map((tam) => (
  <button
    key={tam}
    onClick={() => setTamanhoSelecionado(tam)}
    className={`inline-block border py-1 px-2 rounded-xl cursor-pointer
      ${
        tamanhoSelecionado === tam
          ? "bg-blue-600 text-white"
          : "hover:bg-azul hover:text-white"
      }`}
  >
    {tam}
  </button>
))}   
        <button onClick={() => adicionarCarrinho(produto,tamanhoSelecionado)}>Adiconar ao carrinho</button>
            </div>

            
        </div>
        
    </div>
  )
}
