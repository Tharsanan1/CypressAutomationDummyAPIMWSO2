import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
const environmentVariableProcessor = require('../../jsutils/environmentVariablesProcessor');
const CarbonLoginPage = require('../../pages/CarbonLoginPage');
const carbonLoginPage = new CarbonLoginPage();
const CarbonHomeSideBarPage = require('../../pages/CarbonHomeSideBarPage');
const carbonHomeSideBarPage = new CarbonHomeSideBarPage();
const CarbonUserStoreAddUserAndRolePage = require('../../pages/CarbonUserStoreAddUserAndRolePage');
const carbonUserStoreAddUserAndRolePage = new CarbonUserStoreAddUserAndRolePage();
const CarbonUserAddStepOnePage = require('../../pages/CarbonUserAddStepOnePage');
const carbonUserAddStepOnePage = new CarbonUserAddStepOnePage(); 

Given('I am logged into carbon application with default user credentials', () => {
    carbonLoginPage.loginAsDefaultUser();
})

And(`I click on carbon side bar {string} button`, (identifier) => {
    carbonHomeSideBarPage.clickButton(identifier);
})

And(`I click on add new user button`, () => {
    carbonUserStoreAddUserAndRolePage.clickAddNewUser();
})

And(`I enter username as {string}`, (username) => {
    username = environmentVariableProcessor.replaceWithEnvironmentVariables(username);
    carbonUserAddStepOnePage.enterUsername(username);
})

And(`I enter password as {string}`, (password) => {
    password = environmentVariableProcessor.replaceWithEnvironmentVariables(password);
    carbonUserAddStepOnePage.enterPassword(password);
})

And(`I enter confirm password as {string}`, (password) => {
    password = environmentVariableProcessor.replaceWithEnvironmentVariables(password);
    carbonUserAddStepOnePage.enterConfirmPassword(password);
})

And(`I click next button`, () => {
    carbonUserAddStepOnePage.clickNext();
})