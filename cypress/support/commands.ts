/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";
import "cypress-file-upload";

declare global {
  namespace Cypress {
    interface Chainable {
      userLogin(): Chainable<Element>;
    }
  }
}

Cypress.Commands.add("userLogin", () => {
  cy.findByRole("textbox", {
    name: /e-mail/i,
  }).type("john.doe@orange.fr");
  cy.findByLabelText(/mot de passe/i).type("123456");
  cy.findByRole("button", {
    name: /connexion/i,
  }).click();
});
