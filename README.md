# Vértice Sports

E-commerce de artigos esportivos desenvolvido como projeto de estudo, com frontend em React e backend próprio utilizando Node.js, Express e MongoDB.

O principal objetivo do projeto foi colocar em prática a integração entre frontend, API REST e banco de dados, além de desenvolver funcionalidades comuns de um e-commerce.

## Projeto online

https://sophiaoamaral.github.io/Vertice/

## Tecnologias utilizadas

### Frontend

* React
* JavaScript
* React Router
* Axios
* Tailwind CSS
* LocalStorage
* Vite

### Backend

* Node.js
* Express
* MongoDB
* Mongoose
* CORS
* Dotenv

## Funcionalidades

A aplicação possui catálogo de produtos consumido diretamente da API, filtros por categoria, página individual para cada produto e seleção de tamanhos.

Também foi desenvolvido um carrinho de compras com controle de quantidade, cálculo automático de valores e persistência utilizando LocalStorage.

O fluxo de compra conta com cálculo de subtotal, frete e valor total, além de uma página de checkout com opções de entrega e diferentes formas de pagamento.

Entre as principais funcionalidades estão:

* Catálogo de produtos
* Produtos armazenados no MongoDB
* API REST para consulta dos produtos
* Integração entre React e backend utilizando Axios
* Filtro de produtos por categoria
* Página individual do produto
* Seleção de tamanho
* Carrinho de compras
* Controle de quantidade
* Persistência do carrinho com LocalStorage
* Cálculo de subtotal
* Cálculo de frete
* Checkout
* Opções de entrega
* Pagamento por cartão, Pix ou boleto
* Confirmação de pedido
* Layout responsivo

## Backend

O backend foi desenvolvido utilizando Express e MongoDB.

A API possui atualmente um endpoint para retornar os produtos cadastrados no banco de dados:

```http
GET /produto
```

Também existe um endpoint para verificar o estado da conexão com o MongoDB:

```http
GET /health
```

Exemplo de resposta:

```json
{
  "mongo": "conectado"
}
```

## Estrutura dos produtos

Os produtos são armazenados no MongoDB utilizando um Schema do Mongoose semelhante ao seguinte:

```js
{
  nome: String,
  tipo: String,
  descricao: String,
  categoria: String,
  preco: Number,
  marca: String,
  composicao: String,
  tamanho: [Number],
  image: String
}
```

## Integração com a API

No frontend, os produtos são carregados utilizando Axios:

```js
const resposta = await axios.get(
  `${import.meta.env.VITE_API_URL}/produto`
);

setDados(resposta.data);
```

A URL da API é configurada através de uma variável de ambiente:

```env
VITE_API_URL=URL_DA_API
```

No backend, a conexão com o MongoDB também utiliza variável de ambiente:

```env
MONGO_URI=CONNECTION_STRING_DO_MONGODB
```

## Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/SophiAoAmaral/Vertice.git
```

Entre na pasta do projeto:

```bash
cd Vertice
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com a URL da API:

```env
VITE_API_URL=URL_DA_API
```

Inicie o frontend:

```bash
npm run dev
```

Para executar o backend, instale as dependências do servidor e configure:

```env
MONGO_URI=SUA_CONNECTION_STRING
PORT=3003
```

Depois execute:

```bash
npm start
```

## Aprendizados

Este foi meu primeiro projeto desenvolvendo um backend e realizando a integração completa entre frontend, API e banco de dados.

Durante o desenvolvimento pude praticar conceitos como criação de APIs com Express, modelagem de dados com Mongoose, conexão com MongoDB, requisições HTTP utilizando Axios, variáveis de ambiente, gerenciamento de estado no React, rotas dinâmicas e persistência de dados no navegador.

O projeto continuará sendo atualizado conforme avanço nos estudos de desenvolvimento web.

## Próximos passos

Algumas melhorias planejadas para o projeto:

* Criar endpoints POST, PUT e DELETE
* Criar autenticação de usuários
* Desenvolver cadastro e login
* Criar área administrativa
* Permitir cadastro e edição de produtos
* Armazenar pedidos no banco de dados
* Integrar um serviço real de pagamento
* Implementar validação de dados no backend
* Melhorar tratamento de erros
* Adicionar testes automatizados

## Repositório

https://github.com/SophiAoAmaral/Vertice

## Desenvolvido por

Sophia Amaral

Projeto desenvolvido para estudo e evolução em desenvolvimento Full Stack.
