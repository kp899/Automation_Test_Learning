/// <reference types = "cypress" />

it('LoginTests', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('#divUsername > .form-hint').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#menu_admin_viewAdminModule > b').click()
    cy.get('#btnAdd').click()
    //cy.get('#systemUser_userType').find('#')
})