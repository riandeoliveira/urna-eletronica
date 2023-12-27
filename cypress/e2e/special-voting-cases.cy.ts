import _ from "lodash";

describe("Special Voting Cases Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Should correct a vote", () => {
    cy.get("[data-test-id=blank-vote-button]").click();
    cy.get("[data-test-id=blank-vote-label]").should("have.text", "VOTO EM BRANCO");
    cy.get("[data-test-id=correct-vote-button]").click();
    cy.get("[data-test-id=blank-vote-label]").should("not.exist");
  });

  it("Should vote blank", () => {
    cy.get("[data-test-id=blank-vote-button]").click();
    cy.get("[data-test-id=blank-vote-label]").should("have.text", "VOTO EM BRANCO");

    cy.wait(1000);

    cy.get("[data-test-id=confirm-vote-button]").click();
  });

  it("Should vote for a party by filling in all the fields", () => {
    [9, 4, 0, 0].forEach((value) => {
      cy.get(`[data-test-id=key-button-${value}]`).click();
    });

    cy.get("[data-test-id=non-existent-candidate-label]").should(
      "have.text",
      "CANDIDATO INEXISTENTE",
    );
    cy.get("[data-test-id=party-vote-primary-label]").should("have.text", "VOTO DE LEGENDA");

    cy.wait(1000);

    cy.get("[data-test-id=confirm-vote-button]").click();
  });

  it("Should vote for a party without filling in all the fields", () => {
    [9, 4].forEach((value) => {
      cy.get(`[data-test-id=key-button-${value}]`).click();
    });

    cy.get("[data-test-id=party-vote-secondary-label]").should("have.text", "(voto de legenda)");

    cy.wait(1000);

    cy.get("[data-test-id=confirm-vote-button]").click();
  });

  it("Should vote null", () => {
    _.times(4, () => {
      cy.get("[data-test-id=key-button-0]").click();
    });

    cy.get("[data-test-id=wrong-number-label]").should("have.text", "NÚMERO ERRADO");
    cy.get("[data-test-id=null-vote-label]").should("have.text", "VOTO NULO");

    cy.wait(1000);

    cy.get("[data-test-id=confirm-vote-button]").click();
  });
});
