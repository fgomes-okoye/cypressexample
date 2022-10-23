/// <reference types="cypress" />

describe('My Test Suite', () => {
  it('should scroll up and down', () => {
    // cy.visit('https://codenboxautomationlab.com/')

    cy.visit(Cypress.env('url'))

    cy.wait(5000)
    cy.contains('Contact Us').scrollIntoView()
    //cy.wait(5000)
    cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
  })
})
