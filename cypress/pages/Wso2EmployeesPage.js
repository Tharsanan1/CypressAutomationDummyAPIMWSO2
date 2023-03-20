
const fs = require("fs");
const DATA_FILE_PATH = "./data/employeecount.csv"; 

export default class Wso2EmployeesPage {

  count() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // console.log(err);
      // Returning false here prevents Cypress from failing the test
      return false;
    });
    cy.visit('https://wso2.com/team/all/');
    cy.wait(3000)
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('#wso2_teams').select('R&D');
    cy.wait(5000)

    cy.get('#member_content > :nth-child(2)').children().then(children => {
      const numChildren = children.length
      console.log("Total R&D: ", numChildren);
      let seCount = 0;
      let sseCOunt = 0;
      let atlCount = 0;
      let tlCount = 0;
      let stlCount = 0;
      for (let index = 0; index < children.length; index++) {
        let position = children[index].getElementsByTagName("div")[2].innerHTML
        
        if (position == 'Software Engineer') {
          seCount+=1;
        }
        if (position == 'Senior Software Engineer') {
          sseCOunt+=1;
        }
        if (position == 'Associate Technical Lead') {
          atlCount+=1;
        }
        if (position == 'Technical Lead') {
          tlCount+=1;
        }
        if (position == 'Senior Technical Lead') {
          stlCount+=1;
        }
        


      }

      console.log("SE: ", seCount);
      console.log("SSE: ", sseCOunt);
      console.log("ATL: ", atlCount);
      console.log("TL: ", tlCount);
      console.log("STL: ", stlCount);
      let date = new Date();
      console.log(`${seCount},${sseCOunt},${atlCount},${tlCount},${stlCount},${numChildren},${date}`)
    })
  }

}



// function to append a string to the file
function appendToCSVFile(data) {
  let content = fs.readFileSync(DATA_FILE_PATH, "utf8");
  content += "\n" + data;
  fs.writeFileSync(DATA_FILE_PATH, content);
}