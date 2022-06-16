/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import {homePage} from "../pageObjects/HomePage";


const commonPage = new CommonPage;

describe('Main page tests', () => {

    it('Verify Subscription in home page', () =>{
        cy.visit("http://automationexercise.com/");
        cy.scrollTo('bottom');
        cy.get('#footer')
        homePage.sendSubscription();
        homePage.checkSuccessSubsciptionAlert();
    })
})



