it('google test',function(){
    cy.visit('https://www.google.com/')
    cy.get('[name="q"]')
        .type('Automation Step by Step {enter}')
})