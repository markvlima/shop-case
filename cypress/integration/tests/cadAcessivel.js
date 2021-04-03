// GoatMe - Tela de Login
// Este script efetua a checagem de acessibilidade na página de Login.

describe('GoatMe - Acessibilidade Login', function () {
    beforeEach(() => {
        cy.viewport(1440, 1300)
        cy.visit('https://atleta.teste.goatme.app/login')
        cy.injectAxe()
    })
    it('Login', function () {
        cy.wait(3000)
        cy.checkA11y()
        cy.login('mari@teste.com','goat123{enter}')
     })
})