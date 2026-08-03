import React from 'react'
import { Link } from 'react-router'

export const Produtos = ({dados,setDados}) => {
    
   if (!dados) {
    return <h1>Carregando...</h1>;
  }
  return (
    <div className='container grid grid-cols-2 gap-10 mt-30'>
        {dados.map((dado)=>(
            <div key={dado.id}>
                <Link to={`/produto/${dado._id}`}>
                    <img src={dado.image} alt={dado.nome} className='w-150 h-100 object-contain' />
                    <div>
                        <h3>{dado.nome}</h3>
                        <span>R$ {dado.preco}</span>
                    </div>
                </Link>
            </div>
        ))}
    </div>
  )
}
