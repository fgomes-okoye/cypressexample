/// <reference types="cypress" />

describe('My First Test Suite', () => {
  it('Visits Codenbox automation site', () => {
    cy.visit('https://codenboxautomationlab.com/practice/');
    cy.url().should('include', '/practice/')
    cy.get('input[value="radio2"]').check().should('be.checked');
    cy.get('#search-2 > #searchform > .search-input').type('automation').should('have.value', 'automation')
    
  });
});
