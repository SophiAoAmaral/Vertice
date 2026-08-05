import React from 'react'
import {Link} from 'react-router'
import { useState } from 'react'

export const Header = ({carrinho}) => {
    const [menuAberto, setMenuAberto] = useState(false);
  return (
    
    <header className='border-b pb-6 border-black/20'>
        <span className='text-white p-2 font-bold uppercase text-xs block text-center bg-black'>Frete grátis acima de R$ 299 — troca em 30 dias</span>
        <div className='container'>
            <nav className='flex md:justify-between pt-5 items-center'>
                <Link to='/' className='text-2xl font-bold uppercase mr-50 md:mr-0'>Vértice</Link>
                <ul className='hidden md:flex gap-10 **:hover:text-[#1f4dff]'>
                    <Link to='/'>Inicio</Link>
                    <Link to='/produtos'>Produtos</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/contato'>Contato</Link>
                </ul>
     
                <Link to='/carrinho' className='hidden md:inline-block'>Carrinho <span className='bg-azul px-2 py-1 rounded-xl text-white'>{carrinho.length}</span></Link>

        <button
            className='md:hidden flex flex-col gap-1 mr-3 '
            onClick={() => setMenuAberto(!menuAberto)}>
            <span className='w-6 h-0.5 bg-black'></span>
            <span className='w-6 h-0.5 bg-black'></span>
            <span className='w-6 h-0.5 bg-black'></span>
        </button>

        {menuAberto && (
            <ul className='bg-white md:hidden text-center md:text-start absolute top-20 right-4 bg-surface text-ink rounded-xl shadow-lg p-6 flex flex-col gap-4 min-w-48'>
                    <Link to='/'>Inicio</Link>
                    <Link to='/produtos'>Produtos</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/contato'>Contato</Link>
                    </ul>
         )}
         <Link to='/carrinho' className=' flex items-center md:hidden'><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000" className='relative'><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg><span className='bg-azul md:px-2 md:py-1 py-1 px-2 top-11 right-4 text-xs rounded-xl text-white absolute'>{carrinho.length}</span></Link>
            
            </nav>
        </div>
    </header>
  )
}
