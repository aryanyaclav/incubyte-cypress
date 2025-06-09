import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/LoginPage";
import SignUpPage from "../page_objects/SignUpPage";

let registeredUser = {};

// hook to register the user before login
before(() => {
  const timestamp = Date.now();
  registeredUser = {
    email: `user${timestamp}@test.com`,
    password: 'Test@12345',
    firstName: `Test${timestamp}`,
    lastName: `User${timestamp}`,
  };

  console.log(registeredUser);

  SignUpPage.visit();
  SignUpPage.fillFirstName(registeredUser.firstName);
  SignUpPage.fillLastName(registeredUser.lastName);
  SignUpPage.fillEmail(registeredUser.email);
  SignUpPage.fillPassword(registeredUser.password);
  SignUpPage.fillConfirmPassword(registeredUser.password);
  SignUpPage.submit();
  
  // logout user after registration
  SignUpPage.logout();
});


Given("I am at login page", () => {
    LoginPage.visit();
});

When("I enter valid credentials", () => {
    
    LoginPage.fillEmail(registeredUser.email);
    LoginPage.fillPassword(registeredUser.password);
});

When("I enter invalid password", () => {
    LoginPage.fillEmail(registeredUser.email);
    LoginPage.fillPassword('Test@123');
});

When("I click login button", () => {
    LoginPage.submit();
});

Then("I should be logged in succesfully", () => {
    cy.contains('My Account').should('exist');
})

Then("I should see a invalid password message", () => {
    cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('exist');
})