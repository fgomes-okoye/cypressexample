/// <reference types="cypress" />

describe('My Write & Read  Test Suite', () => {
  it('should write to a file', () => {
    //create a text file and write
    cy.writeFile('simpleFile.txt', 'hello world\n')
    cy.writeFile('simpleFile.txt', 'this is my simpleFile', { flag: 'a+' })

    //create a json file in the fixtures folder and write to it
    cy.writeFile('cypress\\fixtures\\example.json', {
      name: 'Kim',
      email: 'kim@example.com',
      password: 'password123456',
    })
  })

  it('should read from a file', () => {
    //read a text file
    cy.readFile('simpleFile.txt').should('exist').and('contains', 'simpleFile')

    //read a json file from the fixtures folder
    //steps: load fixture file (pass in the file name only)
    cy.fixture('example').then(profile => {
      expect(profile.name).to.eq('Kim')
    })
  })

  it('should pass data from fixtures folder to a login form', () => {
    cy.visit('https://login.salesforce.com/?locale=ca')
    cy.fixture('example').then(profile => {
      cy.get('#username').type(profile.email)
      cy.get('#password').type(profile.password)
    })
  })
})
