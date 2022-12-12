describe("Register proccess", () => {
  beforeEach(() => {
    cy.visit("/inscription");
  });

  it("should renders the screen correctly", () => {
    cy.findByRole("heading", {
      name: /créez votre compte runrando/i,
    }).should("exist");
    cy.findAllByRole("textbox").should("have.length", 3);
    cy.findByLabelText(/mot de passe/i).should("exist");
    cy.findByRole("combobox").should("exist");
    cy.findByRole("button", {
      name: /créer un compte/i,
    }).should("exist");
    cy.findByText(/vous avez un compte \?/i).should("exist");
    cy.findByRole("link", {
      name: /connexion/i,
    }).should("exist");
  });

  it("should renders 5 error messages if the user tries to submit the form with empty fields", () => {
    cy.findByRole("button", {
      name: /créer un compte/i,
    }).click();

    cy.findAllByTestId("inputErr")
      .should("have.length", 5)
      .and("contain", "Requis");
  });

  it("should renders 5 error messages if the user tries to submit the form with wrong credentials", () => {
    const wrongEmail = "iongae";
    const wrongPwd = "1234";

    cy.findAllByRole("textbox").first().click();

    cy.findByRole("textbox", {
      name: /prénom/i,
    }).click();

    cy.findByRole("textbox", {
      name: /e-mail/i,
    }).type(wrongEmail);

    cy.findByLabelText(/mot de passe/i).type(wrongPwd);

    cy.findByRole("combobox").select("");

    cy.findByRole("button", {
      name: /créer un compte/i,
    }).click();

    cy.findAllByTestId("inputErr").should("have.length", 5);

    cy.findAllByTestId("inputErr")
      .eq(2)
      .should("exist")
      .and("contain", "E-mail invalide");

    cy.findAllByTestId("inputErr")
      .eq(3)
      .should("exist")
      .and("contain", "Le mot de passe doit contenir au moins 5 caractères");
  });

  it("should redirects the user to ConnexionScreen if he clicks on Connexion button", () => {
    cy.findByRole("link", {
      name: /connexion/i,
    }).click();

    cy.location("pathname").should("eq", "/connexion");
  });
});

export {};
