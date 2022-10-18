/// <reference types="cypress" />

describe('My First Test Suite', () => {
  it('should scroll up and down', () => {
    cy.visit('https://codenboxautomationlab.com/')
    cy.wait(3000)

    cy.contains('Contact Us').scrollIntoView()
    //cy.wait(3000)
    cy.get('.block-editor-rich-text__editable > span').scrollIntoView()

  })
})
