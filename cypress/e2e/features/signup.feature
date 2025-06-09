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

    Scenario: Signup with short password
        Given I am on the signup page
        When I signup with short password
        And I submit the signup form
        Then I should see short password error message

    Scenario: Signup with empty fields
        Given I am on the signup page
        When I signup with empty fields
        And I submit the signup form
        Then I should see required fields error message

    @alreadyRegisteredSignup
    Scenario: Signup with already registered email
        Given I am on the signup page
        When I signup with already registered email
        And I submit the signup form
        Then I should see already registered email error message