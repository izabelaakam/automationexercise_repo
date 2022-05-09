/// <reference types="Cypress-xpath" />

class CommonPage {
    //Selectors section
    navigationLoginButtonSignup: string = '//*[text()=" Signup / Login"]';
    navigationButtonHome: string = '//*[text()=" Home"]';
    navigationButtonProducts: string = '//*[text()=" Products"]';
    navigationButtonProducts2: string = '.material-icons card_travel'
    navigationButtonDeleteAccount: string = '//*[text()=" Delete Account"]';
    

     //Methods section
    
     clickXpathElement = (selector: string) => {
         cy.xpath(selector).click();
      };

      clickElement = (selector: string) => {
        cy.get(selector).click();
      }

      pageUrlValidation (value: string) {
        cy.url().should("include", value);
      }
    
      checkIfTextIsPresented = (text: string) => {
        cy.contains(text).should("exist");
      }


    }
    
    export default CommonPage;