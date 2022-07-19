/// <reference types="Cypress-xpath" />
import CommonPage from "./CommonPage";

class ContactUsPage extends CommonPage {
    //Selectors section

    inputName: string = '[data-qa="name"]';
    inputEmail: string = '[data-qa="email"]';
    inputSubject: string = '[data-qa="subject"]';
    inputMessage: string = '[data-qa="message"]';
    buttonUploadFile: string = 'input[type="file"]';
    buttonSubmitForm: string = '[data-qa="submit-button"]';
    alertSuccess: string = '*[class^="status alert alert-success"]';
    buttonHome: string = '*[class^="btn btn-success"]';



     //Methods section
    
     fillContactForm(){
            cy.get('[data-qa="name"]').type("John Smith");
            cy.get('[data-qa="email"]').type("XT2Afc@test.com");
            cy.get('[data-qa="subject"]').type("Subject");
            cy.get('[data-qa="message"]').type("message long text for message for contact us form");
            return this;
    }

    }
    
    export const contactUsPage = new ContactUsPage();