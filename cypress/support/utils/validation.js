// Helper function to check for required field errors
export function checkRequiredError() {
  cy.get('body').then(($body) => {
    if ($body.find('.mage-error').length) {
      cy.get('.mage-error').should('contain.text', 'required');
    } else if ($body.find('#email-error').length) {
      cy.get('#email-error').should('contain.text', 'required');
    } else if ($body.find('#pass-error').length) {
      cy.get('#pass-error').should('contain.text', 'required');
    } else {
      cy.contains(/required/i).should('exist');
    }
  });
}
