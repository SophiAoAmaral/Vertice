import React from 'react'
import { useParams } from "react-router";

export const Produto = ({dados}) => {
    const { id } = useParams();

  const produto = dados.find(
  (p) => p._id === id
);

   if (!produto) {
    return <h1>Carregando...</h1>;
  }
  return (
    <div className='container mt-10'>
        <div className='flex gap-20'>
            <img src={produto.image} alt={produto.nome} className='w-150 h-130 object-contain'/>
            <div>
                <h1 className='text-4xl font-bold mt-5'>{produto.nome}</h1>
            </div>
        </div>
        
    </div>
  )
}
