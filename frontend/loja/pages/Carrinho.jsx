import React from 'react'
import { Link } from 'react-router';
import { Produto } from './Produto';

export const Carrinho = ({carrinho, setCarrinho}) => {
const subtotal = carrinho.reduce((total, produto)=>{
  return total + produto.preco * produto.quantidade;
}, 0)
const frete = subtotal > 299 ? 0 : 25;
const total = subtotal + frete;


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

console.log(carrinho);

  return (
    <div className="container">
      {carrinho.map((produto) => (
        <div
          key={produto._id}
          className="border-b border-black/50 flex gap-20 w-300 p-5 "
        >
          <Link to={`/produto/${produto._id}`}>
            <img src={produto.image} className="w-50" alt="" />
          </Link>
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
      {carrinho.length > 0 && (
        <div className="flex justify-end">
          <div className="bg-gray-100 p-5 rounded-xl  w-100 mt-5">
            <h2 className="text-2xl font-bold mb-4">Resumo do pedido</h2>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Frete</span>
              <span>R$ {frete.toFixed(2)}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <button className="bg-black text-white w-full mt-5 py-3 rounded-xl">
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
