<h1 align="center">
    <a href='https://br.freepik.com/vetores/logotipo'>
        <img alt="Logo" src=".github/logo.jpg" width="200px" />
    </a>
</h1>

<h3 align="center">
  Oficina 2.0
</h3>

<p align="center">
    Documentação do projeto Oficina 2.0 realizado no teste técnico de avaliação da codificar.
</p>

<p align="center">
  <a href="">
    <img alt="Language" src="https://img.shields.io/badge/language%20-Javascript%20-blue">
  </a>

  <a href="">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Pedro%20Barbosa-gree">
  </a>

   <a href="">
    <img alt="Repo size" src="https://img.shields.io/badge/size%20-100kb%20-gree">
  </a>

   <a href="">
    <img alt="last commit" src="https://img.shields.io/badge/last%20commit-Julho%2021-blue">
  </a>

</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=Oficina%202.0&uri=https%3A%2F%2Fgist.github.com%2Fpedrobbarbosa%2Fbfcb0eca8e259850188733d47d59dfb4" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

</p>

## 👨🏻‍💻 Sobre o projeto - Resumo

<p>
Backend Api Rest escrita para o processo de seleção - Desafio Técnico - JS/TS - Nível básico
A aplicação foi cronstruída utilizando NodeJS com Express e padrões de API Rest na sua implementação.

Toda a documentação da api está escrita dentro da url
[api-docs](http://localhost:3333/api-docs)
, com cada entidade e método http acessível listado com a respectiva entidade, assim como alguns exemplos de como executá-los e que retorno esperar.

A aplicação está configurada para utilizar o docker/docker-compose, então recomendo que siga os passos abaixo para a utilização do mesmo.


A aplicação possui apenas 3 rotas principais:
  1. `/users`
  2. `/sellers`
  3. `/budgets`


</p>

## Tarefas ⚔️

- 1. [x] Criar um repositório no Github e compartilhar o link com a equipe da Codificar

- 2. [x] Utilizando preferencialmente a linguagem PHP e o framework Laravel, criar a tela de cadastro de orçamento. Para vaga FullStack fazer front em VueJs ou ReactJs.

- 3. [x] Os campos de cadastro serão: id, cliente, data e hora do orçamento, vendedor, descrição, valor orçado. A tela deve permitir também a edição.

- 4. [x] Armazená1.los em um banco de dados que julgar mais adequado (SQL, NoSQL, search server, etc).

- 5. [x] Criar uma tela de pesquisa de orçamento

- 6. [] A tela de pesquisa deverá ter filtro por intervalo de datas, nome do cliente e nome do vendedor.

- 7. [x] A tela deverá conter uma tabela com os dados já filtrados e listados por ordem decrescente da data de cadastro do orçamento

- 8. [x] A tela deverá conter as ações de editar e remover os orçamentos realizados

Para ver o **client web**, clique aqui: [PROJECT_NAME Web](https://github/pedrobbarbosa/readme-template)</br>

## 🚀 Tecnologias

Ferramentas que utilizei para escrever essa aplicação

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Começando

Importe o `Insomnia.json` no Insomnia App ou clique em [Run in Insomnia](#insomniaButton) botão

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- Uma instância do [PostgreSQL](https://www.postgresql.org/)

> Obs.: Recomendo o uso do docker

**Clone o projeto e acesse o arquivo**

```bash
$ git clone https://github.com/pedrobbarbosa/Oficina2.0.git && cd Oficina2.0
```

**Follow the steps below**

```bash
# Suba a aplicação utilizando docker-compose
$ docker-compose up -d

# Tenha certeza que as flags em 'ormconfig.json' para se conectar ao banco de dados estão corretas

# Se tudo funcionar corretamente, faça as migrações.
$ yarn typeorm migration:run

# Alimente o banco de dados com as seeds
$ yarn seed:users
$ yarn seed:sellers
$ yarn seed:budgets

# Parabéns, seu projeto foi iniciado !

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feito com 💜 por Pedro Barbosa 👋