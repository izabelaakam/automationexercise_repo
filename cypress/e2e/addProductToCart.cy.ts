/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import { homePage } from "../pageObjects/HomePage";
import { productsPage } from "../pageObjects/ProductsPage";


const commonPage = new CommonPage;

describe('Cart page tests', () => {
    beforeEach(() => {
        cy.visit("http://automationexercise.com/");
    })

    it.only('Add 2 Products to Cart', () => {
        commonPage.clickXpathElement(commonPage.navigationButtonProducts);
        commonPage.pageUrlValidation("/products");
        commonPage.checkElementIsDisplayed(productsPage.containerProductItems);
        productsPage.addFirstItemToCart();
        commonPage.checkElementIsDisplayed(productsPage.modalSuccessAddToCart);
        productsPage.continueShopping();
        productsPage.addSecondItemToCart();
        commonPage.checkElementIsDisplayed(productsPage.modalSuccessAddToCart);
        productsPage.goToCart()
        commonPage.pageUrlValidation("/view_cart");
        commonPage.checkElementIsDisplayed('#product-1');
        commonPage.checkElementIsDisplayed('#product-2');
    })
})



