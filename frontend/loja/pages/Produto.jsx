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
        <div>
            <img src={produto.image} alt={produto.nome} className='w-150 h-150 object-contain'/>
            <div>
                
            </div>
        </div>
        
    </div>
  )
}
