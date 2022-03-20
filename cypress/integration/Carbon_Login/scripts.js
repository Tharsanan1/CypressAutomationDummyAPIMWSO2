import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
const environmentVariableProcessor = require('../../jsutils/environmentVariablesProcessor');
const CarbonLoginPage = require('../../pages/CarbonLoginPage');
const carbonLoginPage = new CarbonLoginPage();

And(`I enter usename as {string}`, (username) => {
    username = environmentVariableProcessor.replaceWithEnvironmentVariables(username);
    carbonLoginPage.typeUsername(username);
})

And(`I enter password as {string}`, (password) => {
    password = environmentVariableProcessor.replaceWithEnvironmentVariables(password);
    carbonLoginPage.typePassword(password);
})

And(`I click Sign-in button`, () => {
    carbonLoginPage.clickSignIn();
})

