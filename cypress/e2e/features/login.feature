Feature: User Login

    Scenario: Login with valid credentials
        Given I am at login page
        When I enter valid credentials
        And I click login button
        Then I should be logged in succesfully