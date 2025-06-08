import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/LoginPage";

email = 'test12345@email.com';
password = 'Test@1234';

Given("I am at login page", () => {
    LoginPage.visit();
});

When("I enter valid credentials", () => {
    LoginPage.fillEmail(email);
    LoginPage.fillPassword(password);
});

When("I enter invalid password", () => {
    LoginPage.fillEmail(email);
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