# goatme-solving

<p align="center">
  <a href="https://on.cypress.io">Cypress Documentation</a> |
  <a href="https://bitbucket.org/planetarepos/portal-de-clientes-frontend/src/master/">Portal de Clientes</a>
</p>

Este projeto visa solucionar um test case de cadastro de usuário na plataforma GoatMe. Além do cadastro, foram criadas rorinas para exclusão da conta (evitar duplicidade preservando a massa), função genérica de login, mock dos usuário para cadastro e uma checagem da acessibilidade na página de Login.

## Installing

[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io)

Instale o Cypress no Mac, Linux, ou Windows, para isso [clique aqui](https://docs.cypress.io/guides/getting-started/installing-cypress.html).

```bash
npm install cypress --save-dev
```

![installing-cli e1693232](https://user-images.githubusercontent.com/1271364/31740846-7bf607f0-b420-11e7-855f-41c996040d31.gif)

## Commands

É possível criar comandos personalizados para seus scritps, o Cypress.io redesigna o caminho [./cypress/support/commands.js](https://github.com/heltonvalentini/algar-portal-clientes-tests/blob/master/cypress/support/commands.js) para criação desses comandos.

Atualmente você encontrará as funções abaixo:

* login - recebe usuário e senha como parâmetros para realização de login.
```
cy.login(email, password)
```

* toJson - converte um arquivo csv em um JSON para que possa ser manipulado, basta passar como parâmetro o caminho do arquivo csv.
```
cy.toJson(input)
cy.toJson('./cypress/fixtures/exemplo.csv')
```

* toCSV - converte um arquivo csv em um JSON para que possa ser manipulado, basta passar como parâmetro o caminho do arquivo JSON.
```
cy.toCSV(input)
cy.toCSV('./cypress/fixtures/exemplo.json')
```

* clearTemp - Limpa o conteúdo de todos os arquivos temporários e não necessita de parâmetros.
```
cy.clearTemp()
```
