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

    it('Verify name and price for first product on product page and product details page', () =>{
        productsPage.findFirtItem();
        commonPage.pageUrlValidation("/product_details/1");
        productsPage.verifyDetailsAreTheSame();
    });

    it('Search product', () => {
        productsPage.searchProduct();
        productsPage.verifySearchedProduct();
    });

    it('Filter by Woman Dress Category', () => {
        productsPage.chooseWomanDressFilter();
        commonPage.checkIfTextIsPresented("Women - Dress Products")
        commonPage.pageUrlValidation("/category_products/1")
    })

    it('Filter by Man Jeans Category', () => {
        productsPage.chooseManJeansFilter();
        commonPage.checkIfTextIsPresented("Men - Jeans Products")
        commonPage.pageUrlValidation("/category_products/6")
    })

    it('Filter by Kids Tops Category', () => {
        productsPage.chooseKidsTopsFilter();
        commonPage.checkIfTextIsPresented("Kids - Tops & Shirts Products")
        commonPage.pageUrlValidation("/category_products/5")
    })

    it.only('Filter by brand POLO', () => {
        productsPage.chooseBrandPoloFilter()
        commonPage.checkIfTextIsPresented("Brand - Polo Products")
        commonPage.pageUrlValidation("/brand_products/Polo")
    } )
})



