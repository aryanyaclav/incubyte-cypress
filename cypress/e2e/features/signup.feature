Feature: User Sign Up

    Scenario: Succesfull signup with valid credentials
        Given I am on the signup page
        When I fill in valid registration details
        And I submit the signup form
        Then I should see success message or logged in

    Scenario: Signup with mismatched passwords
        Given I am on the signup page
        When I enter user details with mismatched passwords
        And I submit the signup form
        Then I should see an error for password mismatch

    Scenario: Signup with invalid email format
        Given I am on the signup page
        When I signup with invalid email format
        And I submit the signup form
        Then I should see invalid email format error message
