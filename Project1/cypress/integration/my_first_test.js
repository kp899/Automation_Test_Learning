/// <reference types = "cypress" />

it('google test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('.gLFyf').type('Spotify{enter}')
})

it('login vist', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#divUsername > .form-hint').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#menu_admin_Organization').click()
})

it.only('Search', function(){
    cy.visit('https://youtube.com.au/')
    cy.get('#search-input > #search').type('Automation Testing{enter}')
    //cy.contains('Automated').click()

})