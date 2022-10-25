class practicePage {
  static loadHomePage() {
    cy.visit('https://codenboxautomationlab.com/')
    cy.url().should('include', 'codenbox')
  }
  static clickOnPracticeBtn() {
    cy.get('[href="http://codenboxautomationlab.com/practice/"]').click({
      force: true,
    })
  }
  static getTitle(pageTitle) {
    cy.get('.page-title')
      .invoke('text')
      .then(text1 => {
        expect(text1.trim()).to.equal(pageTitle)
      })
  }
  static getDropdownOption() {
    cy.get('#dropdown-class-example').select('Selenium')
  }
  static selectSeleniumOption() {
    cy.get('#dropdown-class-example')
      .select('Selenium')
      .should('have.value', 'option1')
  }
}

export default practicePage
