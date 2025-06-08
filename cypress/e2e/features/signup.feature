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
