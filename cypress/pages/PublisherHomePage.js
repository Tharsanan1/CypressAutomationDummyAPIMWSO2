const AUTH_PATH = ""
const REST_API_MENU_ID = "#itest-rest-api-create-menu";
const CREATE_API_DROPDOWN_ID = "#itest-create-api-menu-button";
const START_FROM_SCRATCH_ID = "#itest-id-landing-rest-create-default"
const API_NAME_ID = "#itest-id-apiname-input";
const API_CONTEXT_ID = "#itest-id-apicontext-input"
const API_VERSION_ID = "#itest-id-apiversion-input"
const API_SERVER_URL_ID = "#itest-id-apiendpoint-input";
const API_SERVER_URL = "http://localhost.com";
const CREATE_AND_PUBLISH_BTN_ID = "#itest-id-apicreatedefault-createnpublish"
const DELETE_API_BTN_ID = "#itest-id-deleteapi-icon-button"
const API_DELETE_SPAN_ID = "#itest-id-deleteconf"
const CREATE_BTN_ID = "#itest-create-default-api-button";
const DEPLOY_BTN_ID = "#deploy-btn";
const LONG_WAIT = 3000
const PUBLISH_BTN_ID = '[data-testid="publish-state-button"]'

const CARBON_HOME_URL = "https://localhost:9446/carbon";



export default class CarbonLoginPage {
  usernameTxtIdentifier = '#username';
  passwordTxtIdentifier = '#password';
  signInBtnIdentifier = '.button';
  warningTxtIdentifier = '#messagebox-warning > p';
  defaultLandingPage = Cypress.env("PUBLISHER_HOME_URL")
  defaultUserName = Cypress.env("USERNAME")
  defaultPassword = Cypress.env("PASSWORD")
  usernameTxtIdentifierCarbon = '#txtUserName';
  passwordTxtIdentifierCarbon = '#txtPassword';
  signInBtnIdentifierCarbon = '.button';

  typeUsername(username) {
    cy.get(this.usernameTxtIdentifier).type(username);
  }

  typePassword(password) {
    cy.get(this.passwordTxtIdentifier).type(password);
  }

  clickSignIn() {
    cy.get('#loginForm').submit()
  }

  checkWarningMessageEqualsTo(content) {
    cy.get(this.warningTxtIdentifier).should("have.text", content);
  }

  isLoginPage() {
    try {
      let url = cy.url().should('include', AUTH_PATH);
      return true;
    } catch (err) {
      return false;
    }
  }

  clickOnRestApiMenu() {
    try {
      cy.get(REST_API_MENU_ID).click();
      return true;
    } catch (err) {
      return false;
    }
  }

  loginAsDefaultUser() {
    cy.visit(this.defaultLandingPage);
    if (this.isLoginPage()) {
      this.typeUsername(this.defaultUserName);
      this.typePassword(this.defaultPassword);
      this.clickSignIn();
    } 
  }

  createRandomAPI() {
    cy.visit(this.defaultLandingPage);
    cy.get(CREATE_API_DROPDOWN_ID).click({force: true});
      cy.get(START_FROM_SCRATCH_ID).click({ force: true });
    
    let randomString = createRandomName(15);
    cy.get(API_NAME_ID).type(randomString);
    cy.get(API_CONTEXT_ID).type(randomString);
    cy.get(API_SERVER_URL_ID).type(API_SERVER_URL);
    cy.get(API_VERSION_ID).type("1");
    cy.get(API_SERVER_URL_ID).focus();
    cy.get(API_SERVER_URL_ID).type("/sometext");
    cy.get(CREATE_BTN_ID).click({ force: true });
    cy.url().should('match', /\/([a-z0-9-])+\/overview/);
    cy.wait(LONG_WAIT + LONG_WAIT + LONG_WAIT)
    cy.url().then(url => {
      let targetUrl = removeLastPart(url) + "/deployments"
      cy.visit(targetUrl)
      cy.wait(LONG_WAIT + LONG_WAIT + LONG_WAIT)
      cy.get(DEPLOY_BTN_ID).click({force:true});
      cy.wait(LONG_WAIT + LONG_WAIT + LONG_WAIT);
      cy.visit(url);
      cy.wait(LONG_WAIT + LONG_WAIT + LONG_WAIT);
      cy.get(PUBLISH_BTN_ID).click({force: true})
      cy.wait(LONG_WAIT + LONG_WAIT );
    });
    console.log("hello")
    // cy.get('.jss3720 > .MuiGrid-root-3561 > .MuiLink-root-3696 > .MuiTypography-root-3331').click({force: true});
    // 
    // cy.visit(this.defaultLandingPage);
    // cy.get(DELETE_API_BTN_ID).click({force: true});
    // cy.get(API_DELETE_SPAN_ID).click({force: true});
  }

  createRandomAPIUsingSwaggerFile() {
    cy.visit(this.defaultLandingPage);
    cy.get(CREATE_API_DROPDOWN_ID).click({ force: true });
    cy.get(START_FROM_SCRATCH_ID).click({ force: true });

    let randomString = createRandomName(15);
    cy.get(API_NAME_ID).type(randomString);
    cy.get(API_CONTEXT_ID).type(randomString);
    cy.get(API_SERVER_URL_ID).type(API_SERVER_URL);
    cy.get(API_VERSION_ID).type("1");
    cy.get(API_SERVER_URL_ID).focus();
    cy.get(API_SERVER_URL_ID).type("/sometext");
    cy.get(CREATE_BTN_ID).click({ force: true });
    cy.url().should('match', /\/([a-z0-9-])+\/overview/);
    cy.wait(LONG_WAIT + LONG_WAIT + LONG_WAIT)
    cy.url().then(url => {
      let targetUrl = removeLastPart(url) + "/deployments"
      cy.visit(targetUrl)
      cy.wait(LONG_WAIT + LONG_WAIT + LONG_WAIT)
      cy.get(DEPLOY_BTN_ID).click({ force: true });
      cy.wait(LONG_WAIT + LONG_WAIT + LONG_WAIT);
      cy.visit(url);
      cy.wait(LONG_WAIT + LONG_WAIT + LONG_WAIT);
      cy.get(PUBLISH_BTN_ID).click({ force: true })
      cy.wait(LONG_WAIT + LONG_WAIT);
    });
    console.log("hello")
    // cy.get('.jss3720 > .MuiGrid-root-3561 > .MuiLink-root-3696 > .MuiTypography-root-3331').click({force: true});
    // 
    // cy.visit(this.defaultLandingPage);
    // cy.get(DELETE_API_BTN_ID).click({force: true});
    // cy.get(API_DELETE_SPAN_ID).click({force: true});
  }

  createUser() {
    cy.visit(CARBON_HOME_URL);
    cy.get(this.usernameTxtIdentifierCarbon).type("admin@wso2.com");
    cy.get(this.passwordTxtIdentifierCarbon).type("wso2123");
    cy.get(this.signInBtnIdentifierCarbon).click();
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .sub > :nth-child(1) > .menu-default').click({force : true})
    cy.get('.tableEvenRow > td > .icon-link').click();
    cy.get('tbody > :nth-child(2) > :nth-child(2) > input').type("mark@gold.com");
    cy.get('#password').type("admin")
    cy.get('#password-repeat').type("admin")
    cy.get('[value="Next >"]').click()
    cy.get('[type="checkbox"][value="Internal/creator"]').click();
    cy.get('[type="checkbox"][value="Internal/publisher"]').click();
    cy.get('.buttonRow > [type="submit"]').click();

  }

}

function createRandomName(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function removeLastPart(url) {
  return url.slice(0, url.lastIndexOf('/'))
}