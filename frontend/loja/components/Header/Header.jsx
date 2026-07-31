import React from 'react'
import {Link} from 'react-router'

export const Header = () => {
  return (
    
    <header className='border-b pb-6 border-black/20'>
        <span className='text-white p-2 font-bold uppercase text-xs block text-center bg-black'>Frete grátis acima de R$ 299 — troca em 30 dias</span>
        <div className='container'>
            <nav className='flex justify-between pt-5 items-center'>
                <Link to='/' className='text-2xl font-bold uppercase'>Vértice</Link>
                <ul className='flex gap-10 **:hover:text-[#1f4dff]'>
                    <Link to='/'>Inicio</Link>
                    <Link to='/produtos'>Produtos</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/contato'>Contato</Link>
                </ul>
                <Link to='/carrinho'>Carrinho</Link>
            </nav>
        </div>
    </header>
  )
}
