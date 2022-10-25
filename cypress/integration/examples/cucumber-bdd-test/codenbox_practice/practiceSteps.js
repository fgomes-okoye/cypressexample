import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import practicePage from './practicePage'
import codenbox_practice from './practicePage'

Given('I successfully land on the Application', () => {
  practicePage.loadHomePage()
})

When('I click on the Practice button', () => {
  practicePage.clickOnPracticeBtn()
})

Then('I can see the page title is {string}', pageTitle => {
  practicePage.getTitle(pageTitle)
})

When('I click on the static dropdown option', () => {
  practicePage.getDropdownOption()
})

Then('I can select Selenium option', () => {
  practicePage.selectSeleniumOption()
})
