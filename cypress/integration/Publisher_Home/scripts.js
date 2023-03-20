import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
const environmentVariableProcessor = require('../../jsutils/environmentVariablesProcessor');
const PublisherHome = require('../../pages/PublisherHomePage');
const PublisherHomePage = new PublisherHome();

Given('I am logged into publisher home', () => {
    PublisherHomePage.loginAsDefaultUser()
})

Given('I create a user', () => {
    PublisherHomePage.createUser()
})

And('I create a random rest api', () => {
    PublisherHomePage.createRandomAPI()
})
