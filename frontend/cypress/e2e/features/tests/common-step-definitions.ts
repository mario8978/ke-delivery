import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("o usuário está na página {string}", (page: string) => {
  cy.visit(page);
});

Given('a usuária {string} está na página de {string}', (usuario: string, pagina: string) => {
  cy.visit(pagina);
}); 

Then('a usuária {string} permanece na página de {string}', (usuario, pagina) => {
  cy.url().should("include", pagina);
});
