Feature: User Login

    Scenario: Login with valid credentials
        Given I am at login page
        When I enter valid credentials
        And I click login button
        Then I should be logged in succesfully

    Scenario: Login with invalid password
        Given I am at login page
        When I enter invalid password
        And I click login button
        Then I should see a invalid password message

    Scenario: Login with unregistered email
        Given I am at login page
        When I enter unregistered email
        And I click login button
        Then I should see unregistered email error

    Scenario: Login with blank fields
        Given I am at login page
        When I click login button
        Then I should see required fields error