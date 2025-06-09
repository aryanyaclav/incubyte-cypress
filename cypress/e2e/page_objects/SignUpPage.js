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
}

export default new SignUpPage();
