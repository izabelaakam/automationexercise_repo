/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import {productsPage} from "../pageObjects/ProductsPage";


const commonPage = new CommonPage;

describe('Products', () => {
    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
        commonPage.clickXpathElement(commonPage.navigationButtonProducts);
        commonPage.pageUrlValidation("/products");
        commonPage.checkElementIsDisplayed(productsPage.containerProductItems);
    });

    it('Verify All Products and product detail page', () =>{
        productsPage.findFirtItem();
        commonPage.pageUrlValidation("/product_details/1");
        productsPage.verifyDetailsAreVisible();
    });

    it('Search product', () => {
        productsPage.searchProduct();
        productsPage.verifySearchedProduct();
    });
})



