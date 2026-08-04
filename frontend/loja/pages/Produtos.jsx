import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react';

export const Produtos = ({dados,setDados}) => {
    const [filtro, setFiltro]= useState('todos');
    const itensFiltrados = filtro === 'todos' ? dados : dados.filter(item => item.categoria === filtro);
   if (dados.length === 0) {
    return <h1>Carregando...</h1>;
  };

  return (
    <div className='container'>
        <div className='mt-20'>
            <Link to='/'>Inicio/Produtos</Link>
            <h1 className='text-7xl uppercase font-bold my-9'>Catalogo</h1>
        </div>

        <article className='flex gap-6'>
             <button onClick={() => setFiltro("todos")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer transition ${filtro === 'todos' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Todos</button>
              <button onClick={() => setFiltro("tenis")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer  transition ${filtro === 'tenis' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Tenis</button>
              <button onClick={() => setFiltro("roupa")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer  transition ${filtro === 'roupa' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Roupas</button>
              <button onClick={() => setFiltro("treino")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer  transition ${filtro === 'treino' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Treino</button>
              <button onClick={() => setFiltro("acessorio")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer  transition ${filtro === 'acessorio' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Acessorios</button>
              <button onClick={() => setFiltro("ciclismo")} className={`py-2 px-4 rounded-2xl text-sm cursor-pointer  transition ${filtro === 'ciclismo' ? 'bg-accent text-cream hover:border-0 ':'border border-muted text-black'}`}>Ciclismo</button>
        </article>
        <div className='grid  grid-cols-[repeat(3,_400px)] mt-10 gap-7 '>
        {itensFiltrados.map((dado)=>(
            <div key={dado.id} className='flex flex-col'>
                <Link to={`/produto/${dado._id}`} className='inline-block '>
                    <img src={dado.image} alt={dado.nome} className='h-100 w-full object-contain mb-5 rounded-2xl' />
                    <div className='flex justify-between'>
                        <h3>{dado.nome}</h3>
                        <span>R$ {dado.preco}</span>
                    </div>
                    
                </Link>
                <div className='flex gap-1 mt-3'>
                       {dado.tamanho?.map((dado)=>(
                            <span className='inline-block border py-1 px-2 rounded-xl'>{dado}</span>
                        ))}
                    </div>
                <div className='flex justify-center flex-col-reverse mt-2  gap-2 mb-9 items-center '>
                        <button className='border rounded-2xl py-3 px-5 '>Adicionar ao carrinho</button>
                        <button className='rounded-2xl py-3 px-5 bg-azul text-white hover:bg-azul-hover w-50'>Comprar</button>
                    </div>
            </div>
        ))}
        </div>
    </div>
  )
}
