Feature: Practice functions of the Application

    As a user, I should be able to use all the functions in the Practice Page

    Scenario: User can see the page title
     Given I successfully land on the Application
     When I click on the Practice button
     Then I can see the page title is 'Automation Practice'

    Scenario: User can select from a static dropdown
     When I click on the static dropdown option
     Then I can select Selenium option