import { should } from "chai"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:60639')
  })

  it('should have a heading', () => {
    cy.visit('http://localhost:60639')
    cy.get("h2").contains("Välkommen till din todo-lista").should("exist");
  })

  it('should add text to our textbox', () => {
    cy.visit('http://localhost:60639')
    cy.get("input").type("Handla").should("have.value","Handla");
    cy.get("button:first").click();
    cy.get("ul>li").should("have.length",1);
  })

  it('should add text to our textbox and check', () => {
    cy.visit('http://localhost:60639')
    cy.get("input").type("Träna").should("have.value","Träna");
    cy.get("button:first").click();
    cy.get("ul>li").should("have.length",1);
    //cy.get("ul>li:first").should("have.class","todo__text--done");
  })

  it('should add text to our textbox and check', () => {
    cy.visit('http://localhost:60639')
    cy.get("#newTodoForm>:nth-child(1)").click();
  })

})