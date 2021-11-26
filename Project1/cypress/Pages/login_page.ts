export class loginPage{

        login_page_username = '#uname'
        login_page_pwd = '#pwd'

        navigate(){
            cy.visit('/') // '/' represents base url
            cy.get('.gLFyf').type('https://trytestingthis.netlify.app/{enter}')
            cy.get('.LC20lb').eq(0).should('have.text','Try Testing This').click() // eq 0 means it is selecting the first element in the array
        }

        enterUsername(uname: string){
            cy.get(this.login_page_username).type(uname)
        }

        enterPassword(pwd: string){
            cy.get(this.login_page_pwd).type(pwd)
            cy.get('[type="submit"]').click()
        }


}