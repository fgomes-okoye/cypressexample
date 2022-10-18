/// <reference types="cypress" />

describe('My Commands Test Suite', () => {
  it('should login to the application using custom command', () => {
    cy.visit('https://codenboxautomationlab.com/wp-login.php')

    // invalid login
    cy.login('noName', '123456')
    cy.get('#login_error').should('contain', 'Error')
  })
})
