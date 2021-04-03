// Jornada de cadastro GoatMe
// Este script efetua o cadastro de um usuário no WebApp GoatMe
// @author: Marcos Lima

import {user1} from "../mocks/users.mocks"

describe('GoatMe', function () {
	const user = user1
	
    it('Cadastro de usuário', function () {
        cy.viewport(1400, 1290)
        cy.visit('https://atleta.teste.goatme.app/greeter')
        
        cy.wait(3000)
        cy.contains('Cadastrar').click()
        cy.wait(1000)
        cy.xpath("//input[@class='vdatetime-input']").click()
        cy.wait(2000)
        cy.get('div').contains('2008').click()
        cy.wait(2000)
        cy.get('div').contains('Setembro').click()
        cy.get('span').contains('1').click()
        cy.wait(2000)
        cy.get('div').contains('Avançar').click()
        cy.get('#search_input').type('fut')

        cy.wait(1000)
        cy.xpath("//input[@id='5f0efd5a1d89d882e151d98b']").click()
        cy.wait(2000)
        cy.xpath("//*/form[2]/button[@class='dvYaJh dGKTlf' and text()='Avançar']").click()

        cy.log('══ DADOS CADASTRAIS ══')
        cy.wait(3000)
        cy.xpath("//*/div[3]/form//input[@class='jrjNjP hoJRHx' and @placeholder='Digite seu nome completo'][1]").type(user.nome)
        cy.xpath("//*/div[3]/form//input[@class='jrjNjP hoJRHx' and @placeholder='Escolha seu apelido. Ex: @meu_nome']").type(user.apelido)
        cy.xpath("//*/div[3]/form//input[@class='jrjNjP hoJRHx' and @placeholder='Seu melhor e-mail']").type(user.email)
        cy.xpath("//*/div[3]/form//input[@class='jrjNjP hoJRHx' and @placeholder='Confirme seu melhor e-mail']").type(user.email)
        cy.xpath("//*/div[3]/form//input[@class='jrjNjP hoJRHx' and @placeholder='Digite sua senha']").type(user.senha)
        cy.xpath("//*/div[3]/form//input[@class='jrjNjP hoJRHx' and @placeholder='Confirme sua senha']").type(user.senha)
        cy.wait(1000)
        cy.xpath('//*/div[3]/form/label[1]/span[1]').click()
        cy.xpath('//*/div[3]/form/label[2]/span[1]').click()
        cy.wait(2000)
        cy.xpath('//*[@id="app"]/section/div/div[2]/form[3]/div[3]/form/button').click()
        cy.wait(2000)

        cy.get('h1').contains("Bem-vindo a Goat me!")
        cy.get('h1').should('have.text', 'Bem-vindo a Goat me!')
    })

    it('Limpeza da base', function () {
        cy.viewport(1400, 1290)
        cy.visit('https://atleta.teste.goatme.app/home')
        cy.wait(5000)
        cy.xpath("//*[@id='app']/main/header/figure/img").click()
        cy.get('a').contains('Configurações').click()
        cy.wait(1000)
        cy.get('a').contains('Excluir Conta').click()
        cy.wait(5000)
        
        cy.login(user.email, user.senha)
        // cy.xpath("//*/div[2]/form//input[@class='jrjNjP hoJRHx' and @placeholder='Entre com seu e-mail']").type(user.email)
        // cy.xpath("//*/div[2]/form//input[@class='jrjNjP cqDmHF llwqTp' and @placeholder='Digite sua senha']").type(user.senha)
        // cy.wait(2000)
        // cy.get('button').contains('Entrar').click()
        cy.wait(2000)
        cy.get('#email').type(user.email)
        cy.get('#email').tab({shift: true}) //press key tab
        cy.get('div').contains('Excluir Conta').click()
        cy.wait(3000)
        cy.xpath("//button[@class='dvYaJh chaYnV']").contains('Confirmar').click()
        
        cy.wait(2000)
        cy.get('h1').should('have.text', 'Bem-vindo a Goat me!')
    })
})