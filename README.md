# WASH-API

Esse README contém as instruções para a instalação e utilização dessa aplicação.

## Pré-requisitos

Você precisa dos itens a seguir, instalados em seu compudador:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Sails 0.12.0](https://0.12.sailsjs.com/)
* [PostgreSQL](https://www.postgresql.org/)

## Instalação

* `git clone https://github.com/eliasful/wash-api` esse repositório
* `cd wash-api`
* `npm install`
* No arquivo `config/connections.js` você deve alterar a configuração abaixo para a desejada:
~~~
 postgres: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    user: 'usuario', // optional
    password: 'senha', // optional
    database: 'wash',
    port: '5432'//optional
  }
~~~
* No PostgreSQL, crie um database com o nome inserido na propriedade `database` do arquivo acima. Neste caso, utilizaremos `wash`.

## Executando

* `sails lift`
* Acesse o aplicativo pela url [http://localhost:1337](http://localhost:4200).
