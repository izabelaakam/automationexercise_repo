/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import { homePage } from "../pageObjects/HomePage";


const commonPage = new CommonPage;

describe('1. Cart page tests', () => {
    beforeEach(() => {
        cy.visit("http://automationexercise.com/");
    })

    it('1.1. Verify Subscription in home page', () =>{
        cy.scrollTo('bottom');
        cy.get('#footer')
        homePage
            .sendSubscription()
            .checkSuccessSubsciptionAlert();
    })

    it('1.2. Verify Subscription in Cart page', () =>{
        commonPage
            .clickXpathElement(commonPage.navigationButtonCart)
            .pageUrlValidation("/view_cart");
        homePage
            .sendSubscription()
            .checkSuccessSubsciptionAlert();
    })
})



