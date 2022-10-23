/// <reference types="cypress" />

describe('My Test Suite', () => {
  it('should visit codenbox automation site', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    //should check that the url is correct
    cy.url().should('include', 'codenbox')
  })

  it('should invoke the child tab', () => {
    cy.get('#opentab').invoke('removeAttr', 'target').click({ force: true })
  })
})
