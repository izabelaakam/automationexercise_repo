/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import {checkoutPage} from "../pageObjects/CheckoutPage";


const commonPage = new CommonPage;

describe('1. Products', () => {
    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
        commonPage
            .clickXpathElement(commonPage.navigationButtonProducts)
            .pageUrlValidation("/products")
            .checkElementIsDisplayed(checkoutPage.containerProductItems);
    });

    it('1.1. Verify name and price for first product on product page and product details page', () =>{
        checkoutPage
            .takeNameAndPriceAndSaveFirstItem()
            .findFirtItem();
        commonPage
            .pageUrlValidation("/product_details/1");
        checkoutPage
            .verifyDetailsAreTheSame();
    });

    it('1.2. Search product', () => {
        checkoutPage
            .searchProduct()
            .verifySearchedProduct();
    });

    it('1.3. Filter by Woman Dress Category', () => {
        checkoutPage
            .chooseWomanDressFilter();
        commonPage
            .checkIfTextIsPresented("Women - Dress Products")
            .pageUrlValidation("/category_products/1");
    })

    it('1.4. Filter by Man Jeans Category', () => {
        checkoutPage
            .chooseManJeansFilter();
        commonPage
            .checkIfTextIsPresented("Men - Jeans Products")
            .pageUrlValidation("/category_products/6");
    })

    it('1.5. Filter by Kids Tops Category', () => {
        checkoutPage
            .chooseKidsTopsFilter();
        commonPage
            .checkIfTextIsPresented("Kids - Tops & Shirts Products")
            .pageUrlValidation("/category_products/5");
    })

    it('1.6. Filter by brand POLO', () => {
        checkoutPage
            .chooseBrandPoloFilter();
        commonPage
            .checkIfTextIsPresented("Brand - Polo Products")
            .pageUrlValidation("/brand_products/Polo");
    } )
})



