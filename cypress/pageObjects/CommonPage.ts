/// <reference types="Cypress-xpath" />

class CommonPage {
    //Selectors section
    navigationLoginButtonSignup: string = '//*[text()=" Signup / Login"]';
    navigationButtonHome: string = '//*[text()=" Home"]';
    navigationButtonProducts: string = '//*[text()=" Products"]';
    navigationButtonProducts2: string = '.material-icons card_travel'
    navigationButtonDeleteAccount: string = '//*[text()=" Delete Account"]';
    navigationButtonLogout: string = '//*[text()=" Logout"]';
    navigationButtonContactUs: string = '//*[text()=" Contact us"]';
    navigationButtonCart: string = '//*[text()=" Cart"]'
    

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

      checkIfXpathElementIsPresent = (selector: string) => {
        cy.xpath(selector).should("be.visible")
      }

      checkElementIsDisplayed = (selector: string) => {
        cy.get(selector).should("be.visible");
      }


    }
    
    export default CommonPage;