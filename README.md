# Desafio_05_GoStack

Desafio desenvolvido pela Rocketseat para criarmos uma aplicação usando os conhecimentos obtidos no módulo "Primeiro Projeto Node.js".
Usando Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services!
Desenvolvemos uma aplicação para armazenar transações financeiras de entrada e saída, que permiti o cadastro e a listagem dessas transações.
A aplicação possui as seguintes rotas: 

POST /transactions: A rota recebe title, value e type dentro do corpo da requisição, sendo type o tipo da transação, que deve ser income 
para entradas (depósitos) e outcome para saídas (retiradas). Ao cadastrar uma nova transação, ela armazena dentro de um objeto com o seguinte formato :
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}

GET /transactions: Essa rota retorna uma listagem com todas as transações que foram cadastradas , junto com o valor de soma de entradas, retiradas e 
total de crédito. Essa rota retorna um objeto com o formato a seguir:
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}

A aplicação possui duas validações, sendo uma não permite retiradas maiores que o valor total e outra cadastrar transações que não sejam do tipo "income" ou "output".
