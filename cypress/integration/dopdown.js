/// <reference types="cypress" />

describe('My First Test Suite', () => {
  it('Visits Codenbox automation site', () => {
    cy.visit('https://codenboxautomationlab.com/practice/');

    //static dropdown
    cy.get('#dropdown-class-example')
      .select('Selenium')
      .should('have.value', 'option1');

    //dynamic dropdown
    cy.get('#autocomplete').type('can');
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      if ($el.text() === 'Canada') {
        cy.wrap($el).click();
      }
    });
  });
});
