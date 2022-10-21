/// <reference types="cypress" />

describe('My Test Suite', function () {
  it('should get text using text method option1', function () {
    cy.visit('https://codenboxautomationlab.com/practice/')

    cy.get('.page-title')
      .invoke('text')
      .then(text1 => {
        expect(text1).to.eq('Automation Practice')
      })
  })

  it('should get text using text method option2', function () {
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.get('.page-title').then(function (text2) {
      cy.log(text2.text())
    })
  })
})
