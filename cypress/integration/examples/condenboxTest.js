/// <reference types="cypress" />
import PracticePage from './pageObjects/PracticePage'

describe('my Test Suite', function () {
  before(function () {
    PracticePage.loadHomePage()
  })

  it('should be about the practice page', function () {
    PracticePage.getTitle()
    PracticePage.getDropDownOption()
    PracticePage.searchCountry()
    PracticePage.clickOnRegistrationForm()
  })
})
