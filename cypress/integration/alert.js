/// <reference types="cypress" />

describe('My First Test Suite', () => {
  it('visits codenbox automation site', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    //should check that the url is correct
    cy.url().should('include', 'codenbox')
    cy.wait(3000)
  })

  it('verify alert window', () => {
    cy.get('#alertbtn').click()
    cy.on('window:alert', str => {
      expect(str).to.equal(
        'Hello , share this practice page who love to learn automation'
      )
    })
  })
  it('verify alert window', () => {
    cy.get('#confirmbtn').click()
    cy.on('window:confirm', str => {
      expect(str).to.equal(
        'Hello , Are you sure you want to confirm?'
      )
    })
  })
})
