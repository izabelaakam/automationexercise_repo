/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import { homePage } from "../pageObjects/HomePage";


const commonPage = new CommonPage;

describe('Cart page tests', () => {
    beforeEach(() => {
        cy.visit("http://automationexercise.com/");
    })

    it('Verify Subscription in home page', () =>{
        cy.scrollTo('bottom');
        cy.get('#footer')
        homePage.sendSubscription();
        homePage.checkSuccessSubsciptionAlert();
    })

    it('Verify Subscription in Cart page', () =>{
        commonPage.clickXpathElement(commonPage.navigationButtonCart);
        commonPage.pageUrlValidation("/view_cart");
        homePage.sendSubscription();
        homePage.checkSuccessSubsciptionAlert();
    })
})



