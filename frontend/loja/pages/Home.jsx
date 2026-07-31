import React from 'react'

export const Home = () => {
  return (
    <section className='container mt-13'>
        <div className='grid grid-cols-2'>
            <div className='flex flex-col gap-5 items-start'>
                <span className='border border-azul/20 p-2 rounded-2xl inline-block bg-azul/10 uppercase text-azul font-bold text-sm'>Coleção Performance 2026</span>
                <h1 className='text-9xl uppercase font-bold leading-27'>Treine além do <span className='text-azul'>limite</span></h1>
                <p className='text-xl text-black/60'>Equipamentos e vestuário de alta performance para quem não aceita o suficiente. Engenharia testada no asfalto, na esteira e no ferro.</p>
                <button className='border py-4 px-6 rounded-2xl bg-azul text-white text-lg mt-2 hover:bg-azul-hover font-bold'>Explorar loja</button>
            </div>
            <div>

            </div>
        </div>
    </section>
  )
}
