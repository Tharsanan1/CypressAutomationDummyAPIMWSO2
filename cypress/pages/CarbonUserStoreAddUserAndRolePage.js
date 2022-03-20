export default class CarbonUserStoreAddUserAndRolePage {
    addNewUserButtonIdentifier = '.tableEvenRow > td > .icon-link'
    addNewRoleButtonIdentifier = '.tableOddRow > td > .icon-link'
    bulkImportUsersIdentifier = '.addNewSecurity > .icon-link'

    clickAddNewUser() {
        cy.get(this.addNewUserButtonIdentifier).click();
    }

    clickAddNewRole() {
        cy.get(this.addNewRoleButtonIdentifier).click();
    }

    clickBulkImportUserButton() {
        cy.get(this.bulkImportUsersIdentifier).click();
    }

}