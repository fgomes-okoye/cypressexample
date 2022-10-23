/// <reference types="cypress" />

describe('My Test Suite', function () {
  it('should navigate back and forth', function () {
    cy.visit('https://codenboxautomationlab.com/')

    cy.contains('Selenium Automation').click({ force: true })
    cy.go('back') //clicks on the back button

    cy.get('#post-2 > div > h3 > span')
      .invoke('text')
      .then(textOfElement => {
        expect(textOfElement.trim()).to.eq('Welcome to CodenBox AutomationLab')
        cy.go('forward') //clicks on the forward button
      })
  })
})
