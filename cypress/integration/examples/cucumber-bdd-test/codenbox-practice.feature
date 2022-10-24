Feature: Practice functions of the Application

    As a user, I should be able to use all the functions in the Practice Page

    Scenario: A user should be able to see the title of the page
     Given I successfully land on the Home page
     When I click on the Practice button
     Then I see the title of the page is 'Automation Practice'

    Scenario: A user should be able to select from a static dropdown list
     When I click on the static dropdown option
     Then I should be able to select Selenium option