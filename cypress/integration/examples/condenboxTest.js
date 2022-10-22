/// <reference types="cypress" />
import PracticePage from './pageObjects/PracticePage'

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
})
