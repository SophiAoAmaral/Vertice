import React from 'react'
import { useState } from 'react'

export const Contato = () => {
    const dados = [
        {id:'01', title:'WhatsApp', info1:'(11) 90000-0000', info2:'Seg a sáb, 9h às 18h'},
        {id:'02', title:'E-mail', info1:'contato@vertice.com.br', info2:'Resposta em até 24h'},
        {id:'03', title:'Loja física', info1:'Rua Augusta, 900 — SP', info2:'Retirada de pedidos e provador'},
    ];
    const [enviado, setEnviado] = useState(false);
    function handleSubmit(e){
        e.preventDefault()
        setEnviado(true)
    }
  return (
    <section className='container'>
        <div className='mt-20 mb-5 ml-40'>
            <span className='text-azul uppercase text-xs font-bold border  py-2 px-4 rounded-2xl bg-azul/15 inline-block mb-4'>Fale com a gente</span>
            <h2 className='text-6xl font-black uppercase my-1'>Como podemos ajudar?</h2>
            <p className='w-130'>Dúvidas sobre disponibilidade, tamanhos, autenticidade ou seu pedido? Nossa equipe responde em até 24h.</p>
        </div>
        <div className='grid grid-cols-[repeat(2,580px)] gap-7 justify-center'>
            <article className='flex flex-col gap-5'>
                {dados.map((dado)=>(
                    <div className='flex flex-col border border-[#dde2ec] bg-[#F7F8FA]  p-5 rounded-2xl'>
                        <span className='text-azul font-black text-sm'>{dado.id}</span>
                        <h3 className='font-black'>{dado.title}</h3>
                        <span className='font-semibold text-sm'>{dado.info1}</span>
                        <span className='text-xs text-gray-400'>{dado.info2}</span>
                    </div>
                ))}
            </article>
            <div className='border  border-[#dde2ec] p-6 rounded-2xl'>
                <form action="" className='flex flex-col' onSubmit={handleSubmit}>
                    {enviado ?
                     <div className='text-center mt-35 flex flex-col'>
                        <h2 className='uppercase text-3xl text-azul font-bold mb-2'>Mensagem enviada</h2>
                        <span>Obrigado. Retornamos em até 24h.</span>
                        <button className='bg-azul font-semibold cursor-pointer text-white py-2 self-center px-7 mt-2 rounded-2xl' onClick={()=> setEnviado(false)}>Enviar outra</button>
                     </div>

                     :
                     <>
                    <label htmlFor="nome" className='font-semibold my-2 text-sm'> Nome</label>
                        <input type="text" id='nome' placeholder='Nome completo' className='border outline-azul/60 border-[#dde2ec] py-3 rounded-2xl px-4 text-xs'/>
                    
                    <label htmlFor="email"  className='font-semibold my-2 text-sm' >Email </label>
                        <input type="email" placeholder='seu@email.com' name='email' id='email' className='border outline-azul/60 border-[#dde2ec] py-3 rounded-2xl px-4 text-xs' />
                  
                    <label htmlFor="tipo"  className='font-semibold my-2 text-sm'>Asunto </label>
                        <select name="tipo" id="" className='border border-[#dde2ec] py-3 px-4 rounded-2xl text-xs'>
                            <option value="duvida">Duvida sobre produto</option>
                            <option value="pedido">Meu pedido</option>
                            <option value="troca">Troca e devolução</option>       
                            <option value="guia">Guia de tamanhos</option>   
                            <option value="nota">Autenticidade e nota fiscal</option>    
                            <option value="qualidade">Compra em qualidade</option>          
                        </select>
                   <label htmlFor="mensagem"  className='font-semibold my-2 text-sm'>Mensagem</label>
                   <textarea name="mensagem" placeholder='Escreva sua mensagem...' className='border border-[#dde2ec] rounded-2xl p-2 text-xs outline-azul/60'></textarea>
                   <button  type='submit' className='mt-3    text-white bg-azul py-2 rounded-2xl font-semibold hover:bg-blue-900 transition cursor-pointer'>Enviar</button>
                   </>
                    }
                </form>
            </div>
        </div>
    </section>
  )
}
