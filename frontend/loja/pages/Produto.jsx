import React from 'react'
import { useParams,  Link } from "react-router";
import { useState } from 'react';

export const Produto = ({dados, adicionarCarrinho}) => {
    const { id } = useParams();
  

  const produto = dados.find(
  (p) => p._id === id
);
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState(null);
  const [adicionado, setAdicionado] = useState(false);

   if (!produto) {
    return 
    <div className="flex justify-center py-20">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <div className="container md:mt-10">
      <Link to={'/produtos'}> Voltar</Link>
      <div className="flex flex-wrap md:flex-nowrap md:gap-10 items-center justify-center">
        <img
          src={produto.image}
          alt={produto.nome}
          className="md:w-150 md:h-130 my-5 object-contain"
        />
        <div className="flex flex-col w-120 gap-1">
          <span className="border border-azul/20 p-3 rounded-2xl md:inline-block bg-azul/10 uppercase text-azul font-bold text-sm inline-block self-start">
            {produto.marca} · produto original
          </span>
          <h1 className="text-4xl md:text-5xl font-bold my-2">{produto.nome}</h1>

          <div className='mb-1'>
            <p className="text-2xl">R${produto.preco}</p>
            <span className="text-sm  text-black/70">
              ou 5x de R${(produto.preco / 5).toFixed(2)} sem juros. Em estoque,
              envio em 24h com nota fiscal.
            </span>
          </div>
          <span className='text-sm'>{produto.tamanho ? 'Selecione um tamanho:' : ''}</span>
          <div className="flex gap-2">
            
            {produto.tamanho?.map((tam) => (
              <div className="mt-1">
                
                <button
                  key={tam}
                  onClick={() => setTamanhoSelecionado(tam)}
                  className={`inline-block  border border-black/50 py-1 px-2 md:py-2 md:px-3 rounded-xl cursor-pointer
                          ${
                            tamanhoSelecionado === tam
                              ? "bg-azul text-white border-0"
                              : "hover:bg-azul hover:text-white"
                          }`}
                >
                  {tam}
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              adicionarCarrinho(produto, tamanhoSelecionado);
              setAdicionado(true);

              setTimeout(() => {
                setAdicionado(false);
              }, 2000);
            }}
            className="cursor-pointer  my-4 py-3 px-6 rounded-2xl self-center bg-azul text-white hover:bg-azul-hover"
          >
            {adicionado ? "Adicionado ✓" : "Adicionar ao carrinho"}
          </button>

          <div className="flex gap-3 md:gap-5 *:border *:text-xs *md:text-base border-b  pb-5 border-[#5C6470]/30 *:border-[#5C6470] *:rounded-xl *:bg-[#F7F8FA] *:px-1 *:py-2 *:md:p-2 *:text-[#5C6470]">
            <span>Frere grátis</span>
            <span>Troca em 30 dias</span>
            <span>Original com nota fiscal</span>
          </div>

          <article className=' mt-7 border-b pb-7 border-[#5C6470]/30'>
            <h3 className='text-2xl uppercase text-azul font-black'>Descrição</h3>
            <p>{produto.description}</p>
          </article>

          <article className='my-7'>  
            <h3 className='text-2xl uppercase text-azul font-black'>Composição</h3>
            <p>{produto.composicao}</p>
          </article>

        </div>
      </div>
    </div>
  );
}
