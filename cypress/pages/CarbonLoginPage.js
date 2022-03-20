export default class CarbonLoginPage {
    usernameTxtIdentifier = '#txtUserName';
    passwordTxtIdentifier = '#txtPassword';
    signInBtnIdentifier = '.button';
    warningTxtIdentifier = '#messagebox-warning > p';
    defaultLandingPage = Cypress.env("CARBON_APPLICATION_LOGIN_PAGE_URL")
    defaultUserName = Cypress.env("VALID_USERNAME_CARBON_APP_1")
    defaultPassword = Cypress.env("VALID_PASSWORD_CARBON_APP_1")

    typeUsername(username) {
        cy.get(this.usernameTxtIdentifier).type(username);
    }

    typePassword(password) {
        cy.get(this.passwordTxtIdentifier).type(password);
    }

    clickSignIn() {
        cy.get(this.signInBtnIdentifier).click();
    }

    checkWarningMessageEqualsTo(content) {
        cy.get(this.warningTxtIdentifier).should("have.text", content);
    }

    loginAsDefaultUser() {
        cy.visit(this.defaultLandingPage);
        this.typeUsername(this.defaultUserName);
        this.typePassword(this.defaultPassword);
        this.clickSignIn();
    }
}