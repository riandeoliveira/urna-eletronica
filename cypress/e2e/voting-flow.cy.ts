describe("Voting Flow Tests", () => {
  it("Should vote for a 'Deputado Federal'", () => {
    cy.visit("http://localhost:5173/");

    cy.get("[data-test-id=occupation-label]").should("have.text", "Deputado Federal");

    [9, 1, 0, 1].forEach((value) => {
      cy.get(`[data-test-id=key-button-${value}]`).click();
    });

    cy.wait(1000);

    cy.get("[data-test-id=confirm-vote-button]").click();
  });

  it("Should vote for a 'Deputado Estadual'", () => {
    cy.get("[data-test-id=occupation-label]").should("have.text", "Deputado Estadual");

    [9, 2, 0, 0, 3].forEach((value) => {
      cy.get(`[data-test-id=key-button-${value}]`).click();
    });

    cy.wait(1000);

    cy.get("[data-test-id=confirm-vote-button]").click();
  });

  it("Should vote for a 'Senador'", () => {
    cy.get("[data-test-id=occupation-label]").should("have.text", "Senador");

    [9, 5, 1].forEach((value) => {
      cy.get(`[data-test-id=key-button-${value}]`).click();
    });

    cy.wait(1000);

    cy.get("[data-test-id=confirm-vote-button]").click();
  });

  it("Should vote for a 'Governador'", () => {
    cy.get("[data-test-id=occupation-label]").should("have.text", "Governador");

    [9, 4].forEach((value) => {
      cy.get(`[data-test-id=key-button-${value}]`).click();
    });

    cy.wait(1000);

    cy.get("[data-test-id=confirm-vote-button]").click();
  });

  it("Should vote for a 'Presidente'", () => {
    cy.get("[data-test-id=occupation-label]").should("have.text", "Presidente");

    [9, 2].forEach((value) => {
      cy.get(`[data-test-id=key-button-${value}]`).click();
    });

    cy.wait(1000);

    cy.get("[data-test-id=confirm-vote-button]").click();
  });

  it("Should finish voting", () => {
    cy.get("[data-test-id=recording-vote-label]").should("have.text", "Gravando");
    cy.get("[data-test-id=end-voting-label]").should("have.text", "FIM");
    cy.get("[data-test-id=voted-label]").should("have.text", "VOTOU");
  });
});
