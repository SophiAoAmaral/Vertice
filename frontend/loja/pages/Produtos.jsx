import React from 'react'
import { Link } from 'react-router'

export const Produtos = ({dados,setDados}) => {
  return (
    <div className='container grid grid-cols-3 gap-10 mt-30'>
        {dados.map((dado)=>(
            <div key={dado.id}>
                <Link to={`/produto/${dado._id}`}>
                    <img src={dado.image} alt={dado.nome} className='w-100 h-100' />
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
