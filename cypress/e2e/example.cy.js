/// <reference types="cypress" />

describe("testing the cocktail-mixer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4173/cocktail-mixer");
  });
  it("displays 82 ingredients by default", () => {
    cy.get(".input-styling").should("have.length", 82);
  });
  it("can add new ingredient and add cart item", () => {
    const newItem = 1;
    cy.get(".input-styling:first").type(`${newItem}`);
    cy.get(".cocktailmixer-sum-area").click();
    cy.get(".btn").click();
    cy.get(".cart-class").click();
    cy.get(".input-styling").should("have.value", 1);
  });
  it("can delete a cart item", () => {
    const newItem = 1;
    cy.get(".input-styling:first").type(`${newItem}`);
    cy.get(".cocktailmixer-sum-area").click();
    cy.get(".btn").click();
    cy.get(".cart-class").click();
    cy.get(".input-styling").should("have.value", 1);
    cy.get(".btn-delete").click();
  });
});
