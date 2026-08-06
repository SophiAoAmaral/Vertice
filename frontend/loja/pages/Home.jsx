import React from 'react'
import capa from '../public/corrida-capa.webp'
import { Link } from 'react-router'
import { useState } from 'react'
import capa2 from '../public/adizero-capa.webp';
import avaliacoes from '../objects/Avaliacoes';


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
  const [click, setClick]= useState(false)


  return (
    <section className="container md:mt-13 mt-5">
      <div className="grid md:grid-cols-[700px_600px]  ">
        <div className="flex flex-col  md:items-start text-center md:text-start gap-6 md:w-190">
          <span className="border border-azul/20 p-2 rounded-2xl md:inline-block bg-azul/10 uppercase text-azul font-bold text-sm">
            Revendedora autorizada 
          </span>
          <h1 className="md:text-8xl text-5xl uppercase font-black md:leading-27 ">
            As maiores marcas do <span className="text-azul">esporte</span>
          </h1>
          <p className="text-xltext-black/60 md:w-[600px]">
            Nike, Adidas, Asics, Under Armour e muito mais em um só lugar. Produtos 100% originais, com nota fiscal e garantia oficial do fabricante.
          </p>
          <Link
            to="/produtos"
            className="border py-4 px-6 rounded-2xl bg-azul text-white text-lg md:mt-2 hover:bg-azul-hover font-bold"
          >
            Explorar loja
          </Link>
        </div>
        <div>
          <img src={capa} alt="" className='md:relative md:inline-block hidden h-150'/>
        </div>
      </div>



      <div className="mt-5 md:mt-20 mb-10 flex md:justify-between border-y  md:py-7 border-black/20">
        {list.map((item) => (
          <div className="md:flex flex-col hidden">
            <span className="text-xl md:text-4xl text-azul font-bold">{item.title}</span>
            <span className="text-sm font-light">{item.text}</span>
          </div>
        ))}
      </div>
      <div>
        <div className='flex justify-between mb-5 md:mb-10 md:mt-0 '>
          <h1 className='text-3xl uppercase font-bold'>Categorias</h1>
          <Link to="/produtos" className='text-azul hover:text-azul-hover font-bold'>
              Ver todos
          </Link>
        </div>

        <div className="flex gap-4 md:gap-10 items-center justify-center flex-wrap border-b border-black/30 md:pb-20 pb-10">
          {categorias.map((categoria) => (
            <Link
              key={categoria}
              to={`/itens/${categoria}`}
              className="border  border-black/10 py-4 px-5 md:py-8 md:px-10 rounded-2xl bg-gray-300/30 capitalize flex flex-col hover:text-azul hover:border-azul/50 "
            >
              <div>
                <p className="uppercase md:text-2xl font-bold">{categoria}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>


<div className="md:mt-1 mb-10">
  <h1 className="text-3xl uppercase font-bold mb-10 mt-10 text-center md:text-start">
    Mais vendidos
  </h1>

  {!dados.length ? (
    <div className="flex justify-center py-20">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  ) : (
    <div className="flex flex-col  md:grid md:grid-cols-3 gap-5 md:gap-6">
      {dados.slice(0, 6).map((produto) => (
        <div key={produto._id} className=" flex flex-col border border-black/20 rounded-2xl p-2 md:p-6">
          <Link
            to={`/produto/${produto._id}`}
            className="flex flex-col gap-2"
          >
            <img src={produto.image} className="md:w-100 " alt={produto.nome} />
            <span className="uppercase text-black/40 font-bold tracking-widest text-sm">
              {produto.categoria}
            </span>
            <h3 className="text-2xl font-bold">{produto.nome}</h3>
            <span className="font-semibold text-xl">
              R$ {produto.preco}
            </span>
          </Link>
        </div>
      ))}
    </div>
  )}
</div>


      <div className='border-b border-black/20 mb-7'>
        <div className='border md:border-dashed flex flex-col-reverse md:grid md:grid-cols-2 md:rounded-2xl mb-9 '>
            <div>
                <img src={capa2} alt=""  className='md:rounded-l-2xl h-[100%]'/>
            </div>
            <div className='bg-azul text-center md:text-start md:rounded-r-2xl p-10 text-white flex flex-col gap-4'>
              <span className='uppercase text-gray-300/80 font-extrabold text-sm'>originalidade garantia</span>
              <h1 className='md:text-7xl text-3xl font-extrabold uppercase'>Só original, direto do distribuidor</h1>
              <p>Compramos exclusivamente de distruibuidores autorizados. Todo pedido sai com nota fiscal, etiqueta original e garantia do fabricante.</p>
              <Link to='/produtos' className='bg-white text-azul text-center self-center px-3 py-2 rounded-2xl border-0 font-bold'>Conheça a loja</Link>
            </div>
        </div>
      </div>
      

      <div className='mb-10'>
        <h1 className='text-4xl md:text-5xl font-extrabold uppercase my-10 text-center'>Quem compra, confia</h1>
        <div className='flex flex-wrap md:flex-nowrap gap-5 md:gap-15'>
          {
            avaliacoes.map((perfil)=>(
              <div className='border border-black/10 rounded-2xl p-2 flex flex-col bg-[#F7F8FA] gap-2 shadow'>
                <span className='flex px-5 pt-5'>⭐⭐⭐⭐⭐</span>
                <p className='text-black/60 px-5'>"{perfil.text}"</p>
                <div className='mb-2'>
                  <h3 className='font-extrabold px-5 text-lg'>{perfil.nome}</h3>
                  <span className='text-black/40 px-5 text-sm capitalize'>{perfil.esporte}</span>
                </div>
                </div>
            ))
          }
        </div>
      </div>


      <article className='bg-[#F7F8FA] flex flex-wrap text-center gap-2 justify-between p-5 md:p-10 items-center mb-7  rounded-2xl shadow-xl'>
          <div className='w-140'>
              <h1 className='text-2xl md:text-6xl font-extrabold uppercase mb-3 '>-10% na primeira compra</h1>
              <span>Assine e receba lançamentos e ofertas exclusivas antes de todo mundo.</span>
          </div>
          <div>
              <input type="text" name="" id="" placeholder='seuemail@example.com' className='border border-gray-200 rounded-2xl px-7 py-2  md:w-90 mb-2' />
              <button onClick={()=> setClick(true)} className='bg-azul text-white px-5 py-2 rounded-2xl'>{click ? 'Inscrito ✓' : 'Assinar'}</button>
          </div>
      </article>
    </section>
  );
}
