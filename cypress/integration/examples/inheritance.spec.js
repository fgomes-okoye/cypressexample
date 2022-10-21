// in real life the base class should be in a separate spec
class BasePage {
  static loadHomePage() {
    cy.visit('https://codenboxautomationlab.com/')
  }

  static wait(number) {
    cy.wait(number)
  }
}
// in real life the test class/child class should be in a separate spec
class HomePage extends BasePage {
  static scrollToBottom() {
    cy.contains('Contact Us').scrollIntoView()
  }

  static scrollToUp() {
    cy.get('.block-editor-rich-text__editable > span').scrollIntoView()
  }
}

describe('inheritance between classes', () => {
  before(function () {
    //runs once before executing all test cases
    //setup data
    //seed or reset database
    HomePage.loadHomePage()
  })

  after(function () {
    //runs once after executing all test cases
    //clean up test data
    //clean cookies
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  beforeEach(function () {
    //runs before each it block or test cases in describe
  })

  afterEach(function () {
    //runs after each it block or test cases in describe
  })

  it('should scroll down and up in home page', () => {
    HomePage.scrollToBottom()
    HomePage.wait(3000)
    HomePage.scrollToUp()
    HomePage.wait(3000)
  })
})
