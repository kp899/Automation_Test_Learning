/// <reference types = "cypress" />

it('google test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('.gLFyf').type('Spotify{enter}')
})

it.only('login vist', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#divUsername > .form-hint').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#menu_admin_UserManagement').click()
    
})