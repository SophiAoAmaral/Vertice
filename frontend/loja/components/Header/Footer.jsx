import React from 'react'

export const Footer = () => {
    const objfooter = [
        {title:'Marcas', lista:['Nike', 'Adidas', 'Asics', 'Under Armour']},
        {title:'Ajuda', lista:['Meus Pedidos', 'Trocas', 'Guia de tamanhos', ' Frete e prazos']},
        {title:'A loja', lista:['Sobre nós', 'Autenticidade', 'Trabalhe conosco', 'Privacidade']},
    
    ]
  return (
    <footer className='bg-black text-white p-10'>
        <div className='container flex flex-wrap justify-between'>
            <div className='w-100'>
                <h3 className='uppercase font-extrabold text-3xl'>Vértice</h3>
                <p className='text-[#8A929E] mt-2'>Revendedora multimarcas de artigos esportivos. Produtos originais das maiores marcas do mundo, com nota fiscal e garantia.</p>
            </div>
           
               
                    {
                        objfooter.map((obj)=>(
                            <div className=''>
                                <ul>
                                    <h3 className='uppercase font-bold text-lg'>{obj.title}</h3>
                                    {obj.lista.map((item)=>(
                                        <li className='text-[#8A929E]'>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
               
           
        </div>
        <div className='border-t border-[#8A929E]/50 mt-10 text-[#8A929E]/50 flex justify-between text-sm container py-4' >
                <p>© 2026 Vértice Sports — revendedora multimarcas.</p>
                <p>Todas as marcas citadas pertencem aos seus respectivos titulares.</p>
        </div>
    </footer>
  )
}
