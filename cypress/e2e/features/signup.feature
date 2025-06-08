Feature: User Sign Up

    Scenario: succesfull signup with valid credentials
        Given I am on the signup page
        When I fill in valid registration details
        And I submit the registration form
        Then I should see success message or logged in