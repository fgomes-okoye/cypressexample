/// <reference types="cypress" />

class RegistrationPage {
  static getFirstName(firstName) {
    cy.get('#nf-field-17')
      .clear()

      .type(firstName, { delay: 30 })
      .should('have.value', firstName)
  }
  static getLastName(lastName) {
    cy.get('#nf-field-18')
      .clear()
      .type(lastName, { delay: 30 })
      .should('have.value', lastName)
  }
  static getEmail(email) {
    cy.get('input[type="email"]')
      .clear()
      .type(email, { delay: 30 })
      .should('have.value', email)
  }
  static selectDropdDown() {
    cy.get('#nf-field-22')
      .select('Selenium Automation')
      .should('have.value', 'selenium-automation')
  }
  static selectCheckbox() {
    cy.get('input[type="radio"]#nf-field-23-0')
      .click({ force: true })
      .should('have.value', 'facebook')
  }
  static submitFormBtn() {
    cy.get('input[type="button"]').click().wait(10000)
    cy.get('.nf-response-msg')
      .invoke('text')
      .then(text1 => {
        expect(text1).to.include('Thank you')
      })
  }
}

export default RegistrationPage
