/// <reference types="cypress" />
import PracticePage from './pageObjects/PracticePage'
import RegistrationPage from './pageObjects/RegistrationPage'

describe('My Test Suite', function () {
  before(function () {
    PracticePage.loadHomePage()
  })

  it('should perform actions on the practice page', function () {
    PracticePage.getTitle()
    PracticePage.getDropDownOption()
    PracticePage.searchCountry()
    PracticePage.clickOnRegistrationForm()
  })

  it('should perform actions on the registration form', function () {
    RegistrationPage.getFirstName('Francis')
    RegistrationPage.getLastName('Drake')
    RegistrationPage.getEmail('francis@test.com')
    RegistrationPage.selectDropdDown()
    RegistrationPage.selectCheckbox()
    RegistrationPage.submitFormBtn()
  })
})
