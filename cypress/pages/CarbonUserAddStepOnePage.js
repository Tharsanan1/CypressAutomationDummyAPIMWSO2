export default class CarbonUserAddStepOnePage {
    userNameTxtIdentifier = 'tbody > :nth-child(2) > :nth-child(2) > input'
    passwordTxtIdentifier = '#password'
    confirmPasswordIdentifier = '#password-repeat'
    nextBtnIdentifier = '[value="Next >"]'

    enterUsername(username) {
        cy.get(this.userNameTxtIdentifier).type(username);
    }

    enterPassword(password) {
        cy.get(this.passwordTxtIdentifier).type(password);
    }

    enterConfirmPassword(password) {
        cy.get(this.confirmPasswordIdentifier).type(password);
    }

    clickNext() {
        cy.get(this.nextBtnIdentifier).click();
    }
}