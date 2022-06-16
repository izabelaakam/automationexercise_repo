/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import { homePage } from "../pageObjects/HomePage";
import { productsPage } from "../pageObjects/ProductsPage";


const commonPage = new CommonPage;

describe('Cart page tests', () => {

    it('Verify Subscription in Cart page', () =>{
        cy.visit("http://automationexercise.com/");
        commonPage.clickXpathElement(commonPage.navigationButtonCart);
        commonPage.pageUrlValidation("/view_cart");
        homePage.sendSubscription();
        homePage.checkSuccessSubsciptionAlert();
    })

    it.only('Add Products in Cart', () => {
        cy.visit("http://automationexercise.com/");
        commonPage.clickXpathElement(commonPage.navigationButtonProducts);
        commonPage.pageUrlValidation("/products");
        commonPage.checkElementIsDisplayed(productsPage.containerProductItems);
        productsPage.addFirstItemToCart();
        commonPage.checkElementIsDisplayed(productsPage.modalSuccessAddToCart);
        productsPage.goToCart()
        commonPage.pageUrlValidation("/view_cart");
        commonPage.checkElementIsDisplayed('#product-1');
    })
})



