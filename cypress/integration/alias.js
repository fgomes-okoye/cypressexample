/// <reference types="cypress" />

describe('My Alias Test Suite', () => {
  it('Visits Codenbox automation site', () => {
    cy.visit('https://codenboxautomationlab.com/wp-login.php');
    cy.wait(3000);
  });

  it('should fill invalid username', () => {
    cy.get('#user_login').as('username');
    cy.get('@username').clear();
    cy.get('@username').type('NoName', { delay: 50 });
  });

  it('should fill invalid password', () => {
    cy.get('#user_pass').as('password');
    cy.get('@password').clear();
    cy.get('@password').type('1234567', { delay: 50 });
  });
});
