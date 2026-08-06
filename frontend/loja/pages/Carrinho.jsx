import React from 'react'

export const Carrinho = ({carrinho, setCarrinho}) => {
  
function aumentarQuantidade(id, tamanho) {
  setCarrinho((carrinhoAtual) =>
    carrinhoAtual.map((item) =>
      item._id === id &&
      item.tamanhoSelecionado === tamanho
        ? {
            ...item,
            quantidade: item.quantidade + 1,
          }
        : item
    )
  );
};
function diminuirQuantidade(id, tamanho) {
  setCarrinho((carrinhoAtual) =>
    carrinhoAtual.map((item) => {
      if (
        item._id === id &&
        item.tamanhoSelecionado === tamanho
      ) {
        if (item.quantidade === 0) {
          return item;
        }

        return {
          ...item,
          quantidade: item.quantidade - 1,
        };
      }

      return item;
    })
  );
}
function removerItem(id, tamanho) {
  setCarrinho((carrinhoAtual) =>
    carrinhoAtual.filter(
      (item) =>
        !(
          item._id === id &&
          item.tamanhoSelecionado === tamanho
        )
    )
  );
}

console.log(carrinho)
  return (
    <div>{carrinho.map((produto) => (
        <div key={produto._id}>
          <h2>{produto.nome}</h2>
          <p>R$ {produto.preco}</p>
          {produto.tamanhoSelecionado && (<p>Tamanho: {produto.tamanhoSelecionado}</p>)}
          <div className='flex gap-2'>
            <button onClick={() => aumentarQuantidade( produto._id,produto.tamanhoSelecionado)}>+</button>
            <p>{produto.quantidade}</p>
            <button onClick={() =>diminuirQuantidade(produto._id,produto.tamanhoSelecionado)}>-</button>
          </div>

{produto.quantidade === 0 ? (
  <button onClick={()=> removerItem(produto._id, produto.tamanhoSelecionado)}>Remover do Carrinho</button>
) : (
  ''
)}
        </div>
      ))}</div>
  )
}
