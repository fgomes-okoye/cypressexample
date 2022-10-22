/// <reference types="cypress" />

describe('My Test Suite', function () {
  it('should visit Codenbox automation site', function () {
    cy.visit('http://codenboxautomationlab.com/practice')
    //should check for correct url
    cy.url().should('include', 'codenbox')
    cy.waitFor(3000)
  })
  //find 'Appium' course name
  it('should verify value from anywhere within the table', function () {
    cy.get('table >tbody >tr').contains('td', 'Appium').should('be.visible')
  })

  //conditional logic: if the course name is 'webServices' then price should be '30'
  it('should check conditional logic in the table', function () {
    cy.get('table >tbody >tr  td:nth-child(2)').each(($el, index, $list) => {
      let text = $el.text()
      if (text.includes('WebServices')) {
        cy.get('table >tbody >tr  td:nth-child(3)')
          .eq(index)
          .then(function (price) {
            let actualPrice = price.text()
            expect(actualPrice.trim()).to.equal('30')
          })
      }
    })
  })
})
