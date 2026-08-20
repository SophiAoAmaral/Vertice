import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import concluido from '../public/pedido-concluido.png'
export const Checkout = ({carrinho, setCarrinho}) => {
    const navigate = useNavigate()
    const [tipoEntrega, setTipoEntrega] = useState("padrao");
    const [pagamento, setPagamento] = useState("cartao");
    const [ enviado, setEnviado] = useState(false)
    const subtotal = carrinho.reduce((total, item) => {
  return total + item.preco * item.quantidade;
}, 0);

let frete = 0;

if (tipoEntrega === "expressa") {
    frete = 29.90;
} else {
    frete = subtotal > 299 ? 0 : 25;
}
const total = subtotal + frete;
    const entregas = [
  {
    id: "expressa",
    titulo: "Entrega expressa",
    prazo: "Chega em 1 a 2 dias úteis",
    valor: 29.9,
  },
  {
    id: "padrao",
    titulo: "Entrega padrão",
    prazo: "Chega em 4 a 7 dias úteis",
    valor: 0,
  },
  {
    id: "retirada",
    titulo: "Retirar na loja",
    prazo: "Rua Augusta, 900 — pronto em 3h",
    valor: 0,
  },
];
function handleSubmit(e){
    e.preventDefault();
    setEnviado(true);
    setCarrinho([]);
}
console.log(carrinho)
  return (
    <section className="container">
      <h1 className="mt-15 mb-10 text-4xl  text-blue font-black uppercase">
        Finalizar pedido
      </h1>
      <form className="grid md:grid-cols-[1fr_500px] md:gap-10 gap-5" onSubmit={handleSubmit}>
        <div>
          <div className="flex flex-col border border-gray-300 p-4 md:p-8 rounded-2xl">
            <h2 className="mb-3 uppercase font-black text-3xl">
              <span className="text-azul">01</span> Entrega
            </h2>
            <label htmlFor="nome" className="font-bold">
              Nome completo{" "}
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              placeholder="Nome completo"
              className="border border-gray-300 py-2 rounded-2xl px-4"
            />
            <div className="grid md:grid-cols-2 gap-5 my-2">
              <div className="flex flex-col">
                <label htmlFor="cep" className="font-bold">
                  CEP{" "}
                </label>
                <input
                  type="text"
                  name="cep"
                  id="cep"
                  required
                  placeholder="00000-000"
                  className="border border-gray-300 py-2 rounded-2xl px-4"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="numero" className="font-bold">
                  Numero
                </label>
                <input
                  type="text"
                  required
                  id='numero'
                  name='numero'
                  placeholder="123"
                  className="border border-gray-300 py-2 rounded-2xl px-4"
                />
              </div>
            </div>
            <label htmlFor="endereco" className="font-bold">
              Endereço
            </label>
            <input
              type="text"
              name="endereco"
              required
              id="endereco"
              placeholder="Rua, bairro, cidade"
              className="border border-gray-300 py-2 rounded-2xl px-4 md:mb-5"
            />

            {entregas.map((entrega) => (
              <label
                className={`border-2 mt-5 rounded-3xl p-5 flex justify-between cursor-pointer transition ${tipoEntrega === entrega.id ? "border-azul bg-blue-50 text-azul" : ""}`}
              >
                <div>
                  <h3 className="font-bold">{entrega.titulo}</h3>
                  <p className="font-light">{entrega.prazo}</p>
                </div>
                <div>
                  <span className="font-bold">
                    {entrega.valor == 0
                      ? "Gratis"
                      : `R$${entrega.valor.toFixed(2)}`}
                  </span>
                  <input
                    className="w-9"
                    type="radio"
                    name="entrega"
                    value={entrega.id}
                    checked={tipoEntrega === entrega.id}
                    onChange={(e) => setTipoEntrega(e.target.value)}
                  />
                </div>
              </label>
            ))}
          </div>
          <div className="border border-gray-300 mt-5 p-4 md:p-8 rounded-2xl">
            <h2 className="mb-3 uppercase font-black text-3xl">Pagamento</h2>
            <div
              className={`flex gap-5 **:py-2 **:px-6 **:border **:rounded-2xl `}
            >
              <button
                type="button"
                className={`${pagamento == "cartao" ? "bg-azul text-white" : ""}`}
                onClick={() => setPagamento("cartao")}
              >
                Cartão
              </button>
              <button
                type="button"
                className={`${pagamento == "pix" ? "bg-azul text-white" : ""}`}
                onClick={() => setPagamento("pix")}
              >
                Pix
              </button>
              <button
                type="button"
                className={`${pagamento == "boleto" ? "bg-azul text-white" : ""}`}
                onClick={() => setPagamento("boleto")}
              >
                Boleto
              </button>
            </div>
            {pagamento === "cartao" && (
              <div className="border mt-5 border-gray-300 rounded-2xl p-4">
                <label htmlFor="" className="block font-bold">
                  Numero Cartao
                </label>
                <input
                  type="text"
                  className="border border-gray-300 w-[100%] py-2 px-4 rounded-2xl mt-2"
                />
                <div className="grid grid-cols-2 gap-5 mt-4">
                  <div>
                    <label htmlFor="" className="block font-bold">
                      Validade
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="border border-gray-300 w-[100%] py-2 px-4 rounded-2xl mt-2"
                      placeholder="MM/AA"
                    />
                  </div>
                  <div>
                    <label htmlFor="" className="block font-bold">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="000"
                      className="border border-gray-300 w-[100%] py-2 px-4 rounded-2xl mt-2"
                    />
                  </div>
                </div>
              </div>
            )}
            {pagamento === "pix" && (
              <div className="mt-3 border-azul border p-6 bg-azul/15 rounded-2xl">
                <h3 className="text-2xl font-black text-azul">
                  5% de desconto no Pix
                </h3>
                <p>
                  O código Pix é gerado na próxima etapa e vale por 30 minutos.
                  A aprovação é imediata e o pedido é liberado na hora.
                </p>
              </div>
            )}
            {pagamento === "boleto" && (
              <div className="mt-3 border border-gray-300 p-6 rounded-2xl bg-[#F7F8FA]">
                <h3 className="text-2xl font-black">Boleto bancário</h3>
                <p>
                  Vencimento em 2 dias úteis. O pedido é separado somente após a
                  confirmação do pagamento pelo banco.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="md:col-start-2 self-start border border-gray-300 p-4 md:p-6 rounded-2xl">
          <h3 className="mb-3 uppercase font-black text-3xl">
            Resumo do pedido
          </h3>
          <div className=" mt-4 md:mt-10 border-b border-gray-300">
            {carrinho.map((item) => (
              <>
                <div className="">
                  <div className="flex gap-4 items-center my-5">
                    <img src={item.image} alt="" className="w-15" />
                    <h3 className="">{item.nome}</h3>
                    {item.tamanhoSelecionado > 0 && (
                      <span>TAM: {item.tamanhoSelecionado}</span>
                    )}
                    <span>Quantidade: {item.quantidade}</span>
                    <span className="font-black">
                      R$ {(item.preco * item.quantidade).toFixed(2)}
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="mt-5">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Frete</span>
              <span>R$ {frete.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-xl border-t border-gray-300 mt-3 pt-3">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>
         
            <button type='submit' className='bg-azul hover:bg-azul-hover cursor-pointer mt-4 py-2 rounded-2xl text-white w-[100%]'>Finalizar</button>
        </div>
        {enviado && (
  <div className="overlay">
    <article className="ativo">
      <h1 className="text-3xl uppercase font-black mb-3">Compra realizada com sucesso!</h1>

      <img src={concluido} className="w-50" alt="" />

      <button onClick={()=> navigate('/')} className='text-azul mt-3 font-bold'>
        Voltar ao início
      </button>
    </article>
  </div>
)}
      </form>
    </section>
  );
}
