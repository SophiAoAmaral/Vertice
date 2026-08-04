import React from 'react'
import capa from '../public/corrida-capa.webp'
import { Link } from 'react-router'
import { useState } from 'react'


export const Home = ({dados,setDados,adicionarCarrinho }) => {
  const list = [
    {title:'40 pts', text:'controle de qualidade'},
    {title:'30 dias', text:'para trocar'},
    {title:'120k+', text:'atletas equipados'},
    {title:'4,9', text:'avaliação média'},
  
  ]
  const categorias = [...new Set(dados.map(item => item.categoria))];
  const [filtro, setFiltro] = useState('todos');
    const itensFiltrados = filtro === 'todos' ? dados : dados.filter(item => item.categoria === filtro);


  return (
    <section className="container md:mt-13">
      <div className="grid md:grid-cols-2  md:gap-30 ">
        <div className="flex flex-col gap-5 md:items-start text-center md:text-start z-50">
          <span className="border border-azul/20 p-2 rounded-2xl inline-block bg-azul/10 uppercase text-azul font-bold text-sm">
            Coleção Performance 2026
          </span>
          <h1 className="md:text-9xl text-5xl uppercase font-bold md:leading-27 ">
            Treine além do <span className="text-azul">limite</span>
          </h1>
          <p className="text-xl text-white md:text-black/60">
            Equipamentos e vestuário de alta performance para quem não aceita o
            suficiente. Engenharia testada no asfalto, na esteira e no ferro.
          </p>
          <Link
            to="/produtos"
            className="border py-4 px-6 rounded-2xl bg-azul text-white text-lg mt-2 hover:bg-azul-hover font-bold"
          >
            Explorar loja
          </Link>
        </div>
        <div>
          <img src={capa} alt="" className='md:relative absolute md:top-0 top-25 left-0 object-cover shadow-inner-'/>
        </div>
      </div>
      <div className="mt-20 mb-10 flex md:justify-between border-y md:py-7 border-black/20">
        {list.map((item) => (
          <div className="md:flex flex-col hidden">
            <span className="text-xl md:text-4xl text-azul font-bold">{item.title}</span>
            <span className="text-sm font-light">{item.text}</span>
          </div>
        ))}
      </div>
      <div>
        <div className='flex justify-between md:mb-10'>
          <h1 className='text-3xl uppercase font-bold'>Categorias</h1>
          <Link to="/produtos" className='text-azul hover:text-azul-hover font-bold'>
              Ver todos
          </Link>
        </div>

        <div className="flex md:gap-10 items-center justify-center flex-wrap border-b border-black/30 pb-20 ">
          {categorias.map((categoria) => (
            <Link
              key={categoria}
              to={`/itens/${categoria}`}
              className="border border-black/10 md:py-8 md:px-10 rounded-2xl bg-gray-300/30 capitalize flex flex-col hover:text-azul hover:border-azul/50 "
            >
              <div>
                <p className="uppercase md:text-2xl font-bold">{categoria}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>



      <div className='mt-1 mb-10'>
        <h1 className='text-3xl uppercase font-bold mb-10 mt-10'>Mais vendidos</h1>
        <div className='grid grid-cols-3 gap-6'>
          {dados.slice(0, 6).map((produto) => (
            <div className='border border-black/20 rounded-2xl p-6'>
              <Link key={produto._id} to={`/produto/${produto._id}`} className='flex flex-col gap-2'>
              <img src={produto.image} className='w-100' alt="" />
              <span className='uppercase text-black/40 font-bold tracking-widest text-sm'>{produto.categoria}</span>
                  <h3 className='text-2xl font-bold'>{produto.nome}</h3>
                  <span className='font-semibold text-xl'>R$ {produto.preco}</span>
              </Link>
              <button className='border rounded-2xl w-85 mt-3 py-2 cursor-pointer hover:bg-azul hover:text-white'  onClick={() => adicionarCarrinho(produto)}>Adicionar</button>
            </div>
          ))}
        </div>
      </div>


      <div className='border'>

      </div>
    </section>
  );
}
