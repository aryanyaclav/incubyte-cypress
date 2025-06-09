//Page object class for login page

class LoginPage {
    visit() {
        cy.visit("/customer/account/login/");
    }
    fillEmail(email) {
        cy.get('#email').type(email);
    }
    fillPassword(password) {
        cy.get('#pass').type(password);
    }
    submit() {
        cy.get('.action.login.primary').click();
    }

    simulateEmptyFields() {
        cy.get('#email').clear();
        cy.get('#pass').clear();
    }
}

export default new LoginPage();