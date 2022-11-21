describe("Connexion proccess", () => {
  beforeEach(() => {
    cy.visit("/connexion");
  });

  it("should renders the screen correctly", () => {
    cy.findByRole("heading", {
      name: /connectez-vous à votre compte/i,
    }).should("exist");
    cy.findByRole("textbox", {
      name: /e-mail/i,
    }).should("exist");
    cy.findByLabelText(/mot de passe/i).should("exist");
    cy.findByRole("button", {
      name: /connexion/i,
    }).should("exist");
    cy.findByText(/vous n'avez pas de compte \?/i).should("exist");
    cy.findByRole("link", {
      name: /s'inscrire/i,
    }).should("exist");
  });

  it("should renders 2 error messages if the user tries to submit the form with empty fields", () => {
    cy.findByRole("button", {
      name: /connexion/i,
    }).click();

    cy.findAllByTestId("inputErr")
      .should("have.length", 2)
      .and("contain", "Requis");
  });

  it("should renders 2 error messages if the user tries to submit the form with wrong credentials", () => {
    const wrongEmail = "iongae";
    const wrongPwd = "1234";

    cy.findByRole("textbox", {
      name: /e-mail/i,
    }).type(wrongEmail);
    cy.findByLabelText(/mot de passe/i).type(wrongPwd);
    cy.findByRole("button", {
      name: /connexion/i,
    }).click();

    cy.findAllByTestId("inputErr")
      .first()
      .should("exist")
      .and("contain", "E-mail invalide");

    cy.findAllByTestId("inputErr")
      .last()
      .should("exist")
      .and("contain", "Le mot de passe doit contenir au moins 5 caractères");
  });

  it("should redirects the user to InscriptionScreen if he clicks on S'inscrire button", () => {
    cy.findByRole("link", {
      name: /s'inscrire/i,
    }).click();

    cy.location("pathname").should("eq", "/inscription");
  });
});

export {};
