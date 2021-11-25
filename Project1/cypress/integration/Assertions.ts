it('Learning Assertions',function(){
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get('#query-btn',{timeout: 6000})
        .should('contain', 'Button')
        .should('have.class','query-btn')
        .should('be.visible')


    cy.get('#query-btn').invoke('attr', 'id')   
        .should('equal','query-btn') 

    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')

    //Explicit assertion
    //expect
    expect(true).to.be.true

    //let name = 'Komal'
    //expect(name).to.be.('Komal')

    assert.equal(4,4, 'Not Equal')
    assert.strictEqual(4,4, 'Not Strictly Equal')
})