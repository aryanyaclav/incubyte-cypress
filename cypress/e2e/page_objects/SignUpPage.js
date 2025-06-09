class SignUpPage {
    visit() {
        cy.visit("/customer/account/create/");
    }

    fillFirstName(name) {
        cy.get('#firstname').type(name);
    }

    fillLastName(name) {
        cy.get('#lastname').type(name);
    }

    fillEmail(email) {
        cy.get('#email_address').type(email);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    fillConfirmPassword(password) {
        cy.get('#password-confirmation').type(password);
    }

    simulateEmptyFields() {
        cy.get('#firstname').clear();
        cy.get('#lastname').clear();
        cy.get('#email_address').clear();
        cy.get('#password').clear();
        cy.get('#password-confirmation').clear();
    }

    submit() {
        cy.get('.action.submit.primary').click();
    }

    logout() {
    cy.get('.customer-welcome').first().click();

    cy.contains('Sign Out').click({force: true});

    cy.url({timeout: 7000}).should('eq', `${Cypress.config('baseUrl')}/`);
    }
}

export default new SignUpPage();
