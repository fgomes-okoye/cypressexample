/// <reference types="cypress" />

describe('My Test Suite', () => {
    it('visits codenbox automation site', () => {
        // cy.visit('https://codenboxautomationlab.com/practice/')

        cy.visit(Cypress.env('url') + '/practice/')

        //should check that the url is correct
        cy.url().should('include', 'codenbox')
    })

    it('should demonstrate assertion chaining', () => {
        cy.get('.page-title').should('be.visible').and('contain', 'Automation Practice')
    })
})
