import _ from "lodash";

describe("Invalid Voting Cases Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("Should not confirm the vote until all required fields are completed", () => {
    cy.get("[data-test-id=key-button-0]").click();
    cy.get("[data-test-id=confirm-vote-button]").click();
    cy.get("[data-test-id=occupation-label]").should("have.text", "Deputado Federal");
  });

  it("Should not confirm the vote until it is checked", () => {
    cy.get("[data-test-id=blank-vote-button]").click();
    cy.get("[data-test-id=check-vote-label]").should("have.text", "CONFIRA O SEU VOTO");
    cy.get("[data-test-id=confirm-vote-button]").click();
    cy.get("[data-test-id=blank-vote-label]").should("have.text", "VOTO EM BRANCO");
  });

  it("Should not vote blank if there are fields filled in", () => {
    _.times(4, () => {
      cy.get("[data-test-id=key-button-0]").click();
    });

    cy.get("[data-test-id=blank-vote-button]").click();
    cy.get("[data-test-id=null-vote-label]").should("have.text", "VOTO NULO");
  });
});
