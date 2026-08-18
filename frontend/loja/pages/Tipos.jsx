import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router';

export const Tipos = ({dados, setDados, adicionarCarrinho}) => {
   const { categoria } = useParams();

  const itensFiltrados = dados.filter(
    item => item.categoria === categoria
  );

    console.log(itensFiltrados)
  return (
    <div className='container'>
      <Link to='/' className='block mt-5 text-azul font-semibold hover:text-azul-hover'>←  Voltar</Link>
      <h3 className='text-3xl uppercase font-bold mt-5'>{categoria}</h3>
        <div className='grid md:grid-cols-3 gap-6 mt-10'>
          {itensFiltrados.map((item)=>(
              <div className='border border-black/20 rounded-2xl p-6'>
                <Link to={`/produto/${item._id}`} key={item._id} className='flex flex-col gap-2'>
                      <img src={item.image} className='md:w-100 md:h-90 object-contain' alt="" />
                      <h3>{item.nome}</h3>
                      <span className='font-semibold text-xl'>R$ {item.preco}</span>
                </Link>
                
              </div>
          ))}
        </div>
    </div>
  )
}
