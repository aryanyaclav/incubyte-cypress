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

When("I submit the registration form", () => {
  SignUpPage.submit();
});

Then("I should see success message or logged in", () => {
  cy.contains('Thank you for registering').should('exist');
});
