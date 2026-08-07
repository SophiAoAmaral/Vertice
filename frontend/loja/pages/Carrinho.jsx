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
    <div className="container">
      {carrinho.map((produto) => (
        <div
          key={produto._id}
          className="border-b border-black/50 flex gap-20 w-300 p-5 "
        >
          <img src={produto.image} className="w-50" alt="" />
          <div>
            <h2 className="text-4xl font-bold">{produto.nome}</h2>

            {produto.tamanho?.length > 0 &&
              (produto.tamanhoSelecionado ? (
                <p className="text-lg my-2">
                  Tamanho: {produto.tamanhoSelecionado}
                </p>
              ) : (
                <p className="text-lg my-2">Selecione um tamanho</p>
              ))}
            <div className="flex gap-2x bg-gray-200 p-2 mt-2 items-center gap-3 w-25 rounded-2xl">
              <button
                className="bg-white px-2 py-1 rounded-[50%]"
                onClick={() =>
                  aumentarQuantidade(produto._id, produto.tamanhoSelecionado)
                }
              >
                +
              </button>
              <p>{produto.quantidade}</p>
              <button
                className="bg-white px-2 py-1 rounded-[50%]"
                onClick={() =>
                  diminuirQuantidade(produto._id, produto.tamanhoSelecionado)
                }
              >
                -
              </button>
            </div>
            {produto.quantidade === 0 ? (
              <button
                onClick={() =>
                  removerItem(produto._id, produto.tamanhoSelecionado)
                }
                className="text-sm text-red-500 cursor-pointer"
              >
                Remover do Carrinho
              </button>
            ) : (
              ""
            )}
            <p className="text-2xl my-2">
              R$ {(produto.preco * produto.quantidade).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
