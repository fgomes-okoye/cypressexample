/// <reference types="cypress" />

describe('My First Test Suite', () => {
  it('visits codenbox automation site', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    //should check that the url is correct
    cy.url().should('include', 'codenbox')
  })

  it('invokes the child tab', () => {
    cy.get('#opentab').invoke('removeAttr', 'target').click()
  })
})
