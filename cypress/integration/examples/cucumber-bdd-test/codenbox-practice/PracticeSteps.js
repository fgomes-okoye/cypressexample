/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('I successfully land on the Home page', () => {
  cy.visit('https://codenboxautomationlab.com/')
  cy.url().should('include', 'codenbox')
})

When('I click on the Practice button', () => {
  cy.get('[href="http://codenboxautomationlab.com/practice/"]').click({
    force: true,
  })
})

Then('I see the title of the page is {string}', pageTitle => {
  cy.get('.page-title')
    .invoke('text')
    .then(text1 => {
      expect(text1.trim()).to.equal('Automation Practice')
    })
})

When('I click on the static dropdown option', () => {
  cy.get('#dropdown-class-example').select('Selenium')
})

Then('I should be able to select Selenium option', () => {
  cy.get('#dropdown-class-example')
    .select('Selenium')
    .should('have.value', 'option1')
})
