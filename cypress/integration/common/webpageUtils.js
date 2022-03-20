import { Then, When } from "cypress-cucumber-preprocessor/steps";
const environmentVariableProcessor = require('../../jsutils/environmentVariablesProcessor');
const wordCreator = require('../../jsutils/wordCreator');
const warningTxtIdentifier = '#messagebox-warning > p';

Then(`I land on {string}`, (url) => {
    url = environmentVariableProcessor.replaceWithEnvironmentVariables(url);
    cy.url().should('include', url)
})

When(`I navigate to {string}`, (url) => {
    url = environmentVariableProcessor.replaceWithEnvironmentVariables(url);
    cy.log("URL : " + url);
    cy.visit(url);
});

And(`I create a random text with {string} length {int} and store it on {string}`, (options, length, variableName) => {
    Cypress.env(variableName, wordCreator.createRandomWordWith(options, length));
    cy.log("var name : " + Cypress.env(variableName));
})

Then(`I see a warning box with content {string}`, (content) => {
    content = environmentVariableProcessor.replaceWithEnvironmentVariables(content);
    cy.get(warningTxtIdentifier).should("have.text", content);
})