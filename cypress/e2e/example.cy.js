/// <reference types="cypress" />

describe("testing the cocktail-mixer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4173/cocktail-mixer");
  });
  it("displays 82 ingredients by default", () => {
    cy.get("[data-cy=ingredient-quantity-input]").should("have.length", 82);
  });
  it("can add new ingredient and add cart item", () => {
    const newItem = 1;
    cy.get("[data-cy=ingredient-quantity-input]:first").type(`${newItem}`);
    cy.get("[data-cy=cocktailmixer-summary-area]").click();
    cy.get("[data-cy=add-to-cart-btn]").click();
    cy.get("[data-cy=cart-link").click();
    cy.get("[data-cy=drink-quantity]").should("have.value", 1);
  });
  it("can delete a cart item", () => {
    const newItem = 1;
    cy.get("[data-cy=ingredient-quantity-input]:first").type(`${newItem}`);
    cy.get("[data-cy=cocktailmixer-summary-area]").click();
    cy.get("[data-cy=add-to-cart-btn]").click();
    cy.get("[data-cy=cart-link").click();
    cy.get("[data-cy=drink-quantity]").should("have.value", 1);
    cy.get("[data-cy=delete-item-btn]").click();
  });
});
