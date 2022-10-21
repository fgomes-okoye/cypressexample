/// <reference types="cypress" />

describe('My Test Suite', () => {
  it('should visit Codenbox automation site using wait', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.url().should('include', 'codenbox')
    cy.wait(3000)
  })

  it.skip('should pause the execution here', () => {
    cy.pause()
  })

  it('should check for the correct element on the page', () => {
    cy.get('.page-title').should('be.visible')
  })
})
