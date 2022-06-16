/// <reference types="Cypress-xpath" />
import CommonPage from "./CommonPage";

class ProductsPage extends CommonPage {
    //Selectors section

    containerProductItems: string = '*[class^="features_items"]';
    buttonViewProduct: string = '*[class^="choose"]';
    buttonAddToCart: string = '*[class^="btn btn-default add-to-cart"]';
    inputSearch: string = '#search_product';
    itemName: string = '*[class^="productinfo text-center"]';
    modalSuccessAddToCart: string = '*[id^="cartModal"]';
    modalBody: string = '*[class^="modal-body"]';

    
     //Methods section

     findFirtItem(){
        cy.get(productsPage.buttonViewProduct).first().click();
     }

     addFirstItemToCart(){
        cy.get(productsPage.buttonAddToCart).first().click();
     }

    verifyDetailsAreVisible(){
        cy.get('.product-information').find('h2').should("not.be.empty");
        cy.get('.product-information').find('p').contains("Category: ");
        cy.get('.product-information').find('p').contains("Condition: ");
        cy.get('.product-information').find('p').contains("Brand: ");
        cy.get('.product-information').find('span').contains("Rs. ");
    }

    searchProduct() {
        cy.get('#search_product').type("winter top");
        cy.get('#submit_search').click();
    }

    verifySearchedProduct() {
        // cy.wait(1500);
        cy.get(this.itemName).find('p').contains("Winter Top");
    }

    goToCart(){
        cy.get(productsPage.modalBody).find('a[href="/view_cart"]').click();
    }
    
    
    }
    
    export const productsPage = new ProductsPage();


