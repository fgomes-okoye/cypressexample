/// <reference types="cypress" />

describe('My Test Suite', () => {
  it('should be able to tick the checkbox', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.get('input#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1')

    //unchecked option1
    cy.get('input#checkBoxOption1').uncheck().should('not.be.checked')

    //multiple checkboxes using common attribute values
    cy.get('input[type="checkbox"]').check(['option1', 'option2'])

    //dynamic dropdown
    cy.get('#autocomplete').type('can')
    cy.get('.ui-menu-item').each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      if ($el.text() === 'Canada') {
        cy.wrap($el).click()
      }
    })
  })
})
