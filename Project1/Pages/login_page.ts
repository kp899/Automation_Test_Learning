export class loginPage{

        navigate(){
            cy.visit('/')
           cy.get('.gLFyf').type('https://trytestingthis.netlify.app/{enter}')
           cy.get('[data-hveid="CA0QAA"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()
        }

        enterUsername(){
            cy.get('#uname').type('test')
        }

        enterPassword(){
            cy.get('#pwd').type('test')
            cy.get('[type="submit"]').click()
            cy.get('h4 > a').click()
        }


}