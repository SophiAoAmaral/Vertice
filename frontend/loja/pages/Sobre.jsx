import React from 'react'
import fachada from '../public/fachada-vertice.png';
import { Link } from 'react-router';
export const Sobre = () => {
    const itens = [
        {id:'01',title:'Peças originais', text:'Compramos apenas de distribuidores autorizados. Nota fiscal e garantia do fabricante em todo pedido.' },
        {id:'02',title:'Preço justo', text:'Margem enxuta e negociação de volume para entregar a marca que você quer por menos.' },
        {id:'03',title:'Curadoria', text:'Não listamos tudo: selecionamos os modelos que realmente valem o investimento.'},]
  return (
    <section className='container'>
        <div className='grid md:grid-cols-2 gap-7 mt-10 md:mt-20 mb-20'>
            <div>
                <span className="border border-azul/20 p-2  mb-3 rounded-2xl md:inline-block bg-azul/10 uppercase text-azul font-bold text-sm">Nossa história</span>
                <h1 className=' text-5xl mt-4 md:mt-0 md:text-8xl font-black uppercase mb-3'>As marcas que você <span className='text-azul'>confia</span></h1>
                <div className='text-[#5C6470] **:mb-2'>
                    <p>A Vértice Sports é uma revendedora multimarcas de artigos esportivos. Começamos em 2016 com uma loja de bairro e hoje reunimos mais de 30 marcas oficiais em um só catálogo.</p>
                    <p>Não fabricamos nada: nosso trabalho é garimpar preço, curar a seleção e garantir procedência. Compramos apenas de distribuidores autorizados, e todo pedido sai com nota fiscal e garantia do fabricante.</p>
                </div>
            </div>
            <img src={fachada} alt="" className='md:h-130 rounded-2xl' />
        </div>

        <div>
            <h2 className='text-4xl uppercase font-black mb-9'>No que acreditamos</h2>
            <div className='flex flex-wrap gap-10 mb-9'>
                {
                    itens.map((item)=>(
                        <div className='bg-[#F7F8FA] px-10 py-8 flex flex-col gap-2 rounded-3xl shadow'>
                            <span className='font-extrabold text-azul'>{item.id}</span>
                            <h3 className='text-2xl font-black uppercase'>{item.title}</h3>
                            <p className='text-[#5C6470]'>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className='bg-azul flex flex-col text-center items-center justify-center p-15 my-10 gap-3 text-white rounded-3xl'>
                <h1 className='text-4xl md:text-6xl uppercase font-black'>Sua marca favorita está aqui</h1>
                <p>Explore o catálogo com Nike, Adidas, Asics, Under Armour e mais.</p>
                <Link to='/produtos' className='text-azul bg-white py-2 px-4 rounded-2xl font-bold'>Ver todas as marcas</Link>
        </div>
    </section>
  )
}
