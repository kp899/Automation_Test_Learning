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

it.only('Translink app', function(){
    cy.visit('https://translink.com.au/')
    cy.get('#Start').type('South Bank')
    cy.get(':nth-child(3) > .input-group > .input-group-addon > .detect-location-icon').click()
    cy.get('.btn-loading').click()
})