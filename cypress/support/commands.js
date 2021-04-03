// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('console', {
    prevSubject: true
    }, (subject, method) => {
    method = method || 'log'
    console[method]('The subject is', subject)
    return subject
})

//Login
Cypress.Commands.add('login', (user, password) => {
    cy.visit('https://atleta.teste.goatme.app/login')
    cy.get("#app > section > div > div.form-login > form > input.jrjNjP.hoJRHx")
      .type(user)
    cy.get("#app > section > div > div.form-login > form > input.jrjNjP.cqDmHF.llwqTp")
      .type(password+'{enter}')
})

//Convert csv to Json
Cypress.Commands.add('toJson', (input, result) => {
    cy.readFile(input).then((csv) => {
        let lines = csv.split("\n");
        let result = [];
        let headers = lines[0].split(",");

        for(let i=1;i<lines.length;i++) {
            let obj = {};
            let currentline=lines[i].split(",");

            for(let j=0;j<headers.length;j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        console.log('csv original:', lines)
        console.log('JSON convertido:', result)
        cy.writeFile('./cypress/fixtures/temp/temp.json', (result))
        cy.log('JSON armazenado no arquivo: ./cypress/fixtures/temp/temp.json')
        //return result; //JavaScript object
        //return JSON.stringify(result); //JSON
    })
    console.log(result)
    return result
})

//Convert Json to .csv
Cypress.Commands.add('toCSV', (input) => {
    cy.readFile(input).then((json) => {
        let array = typeof json != 'object' ? JSON.parse(json) : json;
        let str = '';
        //let headers = array[0].split(":");

        console.log('array: ', array)
        for(let i = 0; i < array.length; i++) {
            let line = '';
            
            for(let index in array[i]) {
                if(line != '') line += ','
                    line += array[i][index];
           
                    //console.log('headers', headers)

                    console.log('line['+i+']:', line)
                    console.log('array['+i+']:', array[i])
            }
            str += line + '\r\n';
        }
        cy.writeFile('./cypress/fixtures/temp/temp.csv', (str))
        cy.log('JSON armazenado no arquivo: ./cypress/fixtures/temp/temp.csv')
        console.log(str)
        //return str;

    })  
})

//Clear temp files
Cypress.Commands.add('clearTemp', () => {
        cy.writeFile('./cypress/fixtures/temp/temp.csv', '')
        cy.writeFile('./cypress/fixtures/temp/temp.json', '')
})
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })