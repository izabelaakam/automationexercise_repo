/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import {contactUsPage} from "../pageObjects/ContactUsPage";


const commonPage = new CommonPage;

describe('1. Contact form', () => {

    it('1.1. Contact us form', () =>{
        cy.visit("http://automationexercise.com/");
        commonPage
            .clickXpathElement(commonPage.navigationButtonContactUs)
            .checkIfTextIsPresented("Get In Touch");
        contactUsPage
            .fillContactForm();
        commonPage
            .clickElement(contactUsPage.buttonSubmitForm)
            .checkElementIsDisplayed(contactUsPage.alertSuccess)
            .clickElement(contactUsPage.buttonHome)
            .pageUrlValidation("/");
    })

})



