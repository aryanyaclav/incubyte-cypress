import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { Before } from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from '../page_objects/SignUpPage';

let testEmail = `testuser_${Date.now()}@example.com`;
let testPassword = 'Test@12345';
let registeredUser = {};

Before({tags: "@alreadyRegisteredSignup"},() => {
      const timestamp = Date.now();
      registeredUser = {
        email: `user${timestamp}@test.com`,
        password: 'Test@12345',
        firstName: `Test${timestamp}`,
        lastName: `User${timestamp}`,
      };
    
      SignUpPage.visit();
      SignUpPage.fillFirstName(registeredUser.firstName);
      SignUpPage.fillLastName(registeredUser.lastName);
      SignUpPage.fillEmail(registeredUser.email);
      SignUpPage.fillPassword(registeredUser.password);
      SignUpPage.fillConfirmPassword(registeredUser.password);
      SignUpPage.submit();
    
      // logout user after registration
      SignUpPage.logout();
})

Given("I am on the signup page", () => {
  SignUpPage.visit();
});

When("I fill in valid registration details", () => {
  SignUpPage.fillFirstName('Test');
  SignUpPage.fillLastName('User');
  SignUpPage.fillEmail(testEmail);
  SignUpPage.fillPassword(testPassword);
  SignUpPage.fillConfirmPassword(testPassword);
});

When("I enter user details with mismatched passwords", () => {
  SignUpPage.fillFirstName('Test');
  SignUpPage.fillLastName('User');
  SignUpPage.fillEmail(testEmail);
  SignUpPage.fillPassword(testPassword);
  SignUpPage.fillConfirmPassword('WrongPassword');
});

When("I signup with invalid email format", () => {
  SignUpPage.fillFirstName('Test');
  SignUpPage.fillLastName('User');
  SignUpPage.fillEmail('testemail');
  SignUpPage.fillPassword(testPassword);
  SignUpPage.fillConfirmPassword(testPassword);
})

When("I signup with short password", () => {
  SignUpPage.fillFirstName('Test');
  SignUpPage.fillLastName('User');
  SignUpPage.fillEmail(testEmail);
  SignUpPage.fillPassword('Test');
  SignUpPage.fillConfirmPassword('Test');
})

When("I signup with empty fields", () => {
  SignUpPage.simulateEmptyFields();
})

When("I signup with already registered email", () => {
  SignUpPage.fillFirstName(registeredUser.firstName);
  SignUpPage.fillLastName(registeredUser.lastName);
  SignUpPage.fillEmail(registeredUser.email);
  SignUpPage.fillPassword(registeredUser.password);
  SignUpPage.fillConfirmPassword(registeredUser.password);
})

When("I submit the signup form", () => {
  SignUpPage.submit();
});

Then("I should see success message or logged in", () => {
  cy.contains('Thank you for registering').should('exist');
});

Then("I should see an error for password mismatch", () => {
  cy.contains('Please enter the same value again.').should('exist');
});

Then("I should see invalid email format error message", () => {
  cy.contains('Please enter a valid email address').should('exist');
});

Then("I should see short password error message", () => {
  cy.contains('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.').should('exist');
});

Then("I should see required fields error message", () => {
  cy.contains('This is a required field.').should('exist');
});

Then("I should see already registered email error message", () => {
  cy.contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.').should('exist');
});
