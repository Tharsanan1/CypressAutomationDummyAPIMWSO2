export default class CarbonHomeSideBarPage {
    buttonidentifierList = [
        {
            key : 'Main > User and Roles > Add',
            value: ':nth-child(3) > :nth-child(1) > :nth-child(2) > .sub > :nth-child(1) > .menu-default'
        }
    ]
    buttonIdentifierProcessedMap = {}

    constructor() {
        for (let index = 0; index < this.buttonidentifierList.length; index++) {
            const element = this.buttonidentifierList[index];
            let spaceRemovedKey = element.key.replace(/\s/g, '');
            this.buttonIdentifierProcessedMap[spaceRemovedKey] = element.value;
            
        }
    }

    clickButton(key) {
        let identifier = this.buttonIdentifierProcessedMap[key.replace(/\s/g, '')];
        cy.get(identifier).click();
    }
}