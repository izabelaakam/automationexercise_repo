/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import {contactUsPage} from "../pageObjects/ContactUsPage";


const commonPage = new CommonPage;

describe('Contact form', () => {

    it('Contact us form', () =>{
        cy.visit("http://automationexercise.com/");
        commonPage.clickXpathElement(commonPage.navigationButtonContactUs);
        commonPage.checkIfTextIsPresented("Get In Touch");
        contactUsPage.fillContactForm();
        commonPage.clickElement(contactUsPage.buttonSubmitForm);
        commonPage.checkElementIsDisplayed(contactUsPage.alertSuccess);
        commonPage.clickElement(contactUsPage.buttonHome);
        commonPage.pageUrlValidation("/");
    })
})



