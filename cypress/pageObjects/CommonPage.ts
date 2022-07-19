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
    navigationButtonCart: string = '//*[text()=" Cart"]';
    

     //Methods section
    
     clickXpathElement = (selector: string) => {
         cy.xpath(selector).click();
         return this;
      };

      clickElement = (selector: string) => {
        cy.get(selector).click();
        return this;
      }

      clickFirstElement = (selector: string) => {
        cy.get(selector).first().click();
        return this;
      }

      clickAllElement = (selector: string) => {
        cy.get(selector).click({multiple: true});
        return this;
      }

      pageUrlValidation (value: string) {
        cy.url().should("include", value);
        return this;
      }
    
      checkIfTextIsPresented = (text: string) => {
        cy.contains(text).should("exist");
        return this;
      }

      checkIfElementContainText = (selector: string, text: string) => {
        cy.get(selector).contains(text);
        return this;
      }

      checkIfXpathElementIsPresent = (selector: string) => {
        cy.xpath(selector).should("be.visible");
        return this;
      }

      checkElementIsDisplayed = (selector: string) => {
        cy.get(selector).should("be.visible");
        return this;
      }

      checkElementIsNotExist = (selector: string) => {
        cy.get(selector).should("not.exist");
        return this;
      }

    }
    
    export default CommonPage;