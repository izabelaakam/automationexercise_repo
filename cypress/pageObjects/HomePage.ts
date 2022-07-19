/// <reference types="Cypress-xpath" />
import CommonPage from "./CommonPage";

class HomePage extends CommonPage {
    //Selectors section
    inputSubsection : string = '#susbscribe_email';
    buttonSendSubsection : string = 'button[id="subscribe"]';
    alertSuccessSubsciption: string = '*[class^="alert-success alert"]';



     //Methods section
    
     sendSubscription(){
        cy.get(this.inputSubsection).type("XT2Afc@test.com");
        cy.get(this.buttonSendSubsection).click({ force: true });
        return this;
     }

     checkSuccessSubsciptionAlert(){
        cy.get(this.alertSuccessSubsciption).contains("You have been successfully subscribed!");
        return this;
     }
    
    }
    
    export const homePage = new HomePage();