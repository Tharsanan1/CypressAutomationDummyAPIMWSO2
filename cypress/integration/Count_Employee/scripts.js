import { Then, When, And } from "cypress-cucumber-preprocessor/steps";

const Wso2CountEmployeesPage = require('../../pages/Wso2EmployeesPage');
let countEmps = new Wso2CountEmployeesPage();

Given('I want to count employees', () => {
    countEmps.count();
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