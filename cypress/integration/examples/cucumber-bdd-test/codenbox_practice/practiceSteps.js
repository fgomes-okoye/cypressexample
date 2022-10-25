import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('I successfully land on the Application', () => {
  cy.visit('https://codenboxautomationlab.com/')
  cy.url().should('include', 'codenbox')
})

When('I click on the Practice button', () => {
  cy.get('[href="http://codenboxautomationlab.com/practice/"]').click({
    force: true,
  })
})

Then('I can see the page title is {string}', pageTitle => {
  cy.get('.page-title')
    .invoke('text')
    .then(text1 => {
      expect(text1.trim()).to.equal(pageTitle)
    })
})

When('I click on the static dropdown option', () => {
  cy.get('#dropdown-class-example').select('Selenium')
})

Then('I can select Selenium option', () => {
  cy.get('#dropdown-class-example')
    .select('Selenium')
    .should('have.value', 'option1')
})
