import React from 'react'

export const Carrinho = ({carrinho}) => {
  return (
    <div>{carrinho.map((produto) => (
        <div key={produto._id}>
          <h2>{produto.nome}</h2>
          <p>R$ {produto.preco}</p>
        </div>
      ))}</div>
  )
}
