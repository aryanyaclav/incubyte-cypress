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

When("I click login button", () => {
    LoginPage.submit();
});

Then("I should be logged in succesfully", () => {
    cy.contains('My Account').should('exist');
})