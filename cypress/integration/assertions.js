/// <reference types="cypress" />

describe('My First Test Suite', () => {
  it('visits codenbox automation site', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    //should check that the url is correct
    cy.url().should('include', 'codenbox')
  })

  it('should check the correct element on the page', () => {
    cy.get('.page-title').should('be.visible')
  })

  it('should verify the length property', () => {
    cy.get('.search-input').should('have.length', 2)
  })

  it('should verify the text of an element', () => {
    cy.get('#openwindow').should('have.text', 'Open Window')
  })

  it('should verify that option3 is checked', () => {
    cy.get('#checkBoxOption3').check().should('be.checked')
  })

  it('should select Appium from the static dropdown', () => {
    cy.get('#dropdown-class-example')
      .select('Appium')
      .should('have.value', 'option2')
  })
})
