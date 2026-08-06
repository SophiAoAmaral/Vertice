import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react';

export const Produtos = ({dados,setDados,adicionarCarrinho, tamanhosSelecionados, setTamanhosSelecionados}) => {
    const [filtro, setFiltro]= useState('todos');
    const itensFiltrados = filtro === 'todos' ? dados : dados.filter(item => item.categoria === filtro);
   
   if (dados.length === 0) {
    return <h1>Carregando...</h1>;
  };
  console.log(tamanhosSelecionados)
  return (
    <div className="container">
      <div className="mt-20">
        <Link to="/">Inicio/Produtos</Link>
        <h1 className="text-7xl uppercase font-bold my-9">Catalogo</h1>
      </div>

      <article className="flex gap-6 ">
        <button
          onClick={() => setFiltro("todos")}
          className={` buttonFiltro transition ${filtro === "todos" ? " active " : "desable"}`}
        >
          Todos
        </button>
        <button
          onClick={() => setFiltro("tenis")}
          className={`buttonFiltro transition ${filtro === "tenis" ? "  active" : "desable"}`}
        >
          Tenis
        </button>
        <button
          onClick={() => setFiltro("roupa")}
          className={`buttonFiltro transition ${filtro === "roupa" ? " active" : "desable"}`}
        >
          Roupas
        </button>
        <button
          onClick={() => setFiltro("treino")}
          className={`buttonFiltro transition ${filtro === "treino" ? "active" : "desable"}`}
        >
          Treino
        </button>
        <button
          onClick={() => setFiltro("acessorio")}
          className={`buttonFiltro transition ${filtro === "acessorio" ? "active" : "desable"}`}
        >
          Acessorios
        </button>
        <button
          onClick={() => setFiltro("ciclismo")}
          className={`buttonFiltro transition ${filtro === "ciclismo" ? "  active" : "desable"}`}
        >
          Ciclismo
        </button>
      </article>
      <div className="grid  grid-cols-[repeat(3,_400px)] mt-10 gap-9 ">
        {itensFiltrados.map((dado) => (
          <div
            key={dado.id}
            className="flex flex-col border border-black/20 md:p-6 rounded-2xl shadow"
          >
            <Link to={`/produto/${dado._id}`} className="inline-block ">
              <img
                src={dado.image}
                alt={dado.nome}
                className="h-100 w-100 object-contain mb-2 rounded-2xl"
              />
              <div className="flex justify-between items-center">
                <h3 className='text-xl font-bold'>{dado.nome}</h3>
                <span>R$ {dado.preco}</span>
              </div>
            </Link>
        
          </div>
        ))}
      </div>
    </div>
  );
}
