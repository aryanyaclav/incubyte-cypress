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
}

export default new LoginPage();