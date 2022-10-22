/// <reference types="cypress-downloadfile"/>
/// <reference types="cypress"/>

describe('My File Download Test suite', function () {
  it('should download file', function () {
    cy.downloadFile(
      'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
      'mydownloads',
      'example.jpg',
      'MyCustomAgentName'
    )
  })
})
