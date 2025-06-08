import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignUpPage from '../page_objects/SignUpPage';

let testEmail = `testuser_${Date.now()}@example.com`;
let testPassword = 'Test@12345';

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
