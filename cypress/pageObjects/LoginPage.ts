/// <reference types="Cypress-xpath" />
import CommonPage from "./CommonPage";

class LoginPage extends CommonPage {
    //Selectors section

    buttonSignup: string = '[data-qa="signup-button"]';


     //Methods section
    
     enterNameAndEmail(){
         cy.fixture("testdata").then((newUser) => {
             cy.get('[data-qa="signup-name"]').type(newUser.name);
             cy.get('[data-qa="signup-email"]').click().form();
         });
     }
    
    }
    
    export const loginPage = new LoginPage();