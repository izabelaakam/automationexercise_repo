/// <reference types="Cypress-xpath" />
import CommonPage from "./CommonPage";

class CartPage extends CommonPage {

    //Selectors section
    columnQuantity: string = '.cart_quantity';
    buttonProccessToCheckout: string = '*[class^="btn btn-default check_out"]';
    modalCheckout: string = '*[class^="modal-dialog modal-confirm"]';
    buttonRemoveItem: string = '.cart_quantity_delete';
    notificationEmptyCart: string = '#empty_cart'


    //Methods section
    checkQuantity(number){
        cy.get(this.columnQuantity)
        .find('button')
        .then (($button) => {
            const num = parseFloat($button.text())
            expect(num).to.eq(number)
        })
        return this;
    }

    goToRegisterLogin(){
        cy.get('.modal-body').find('a[href="/login"]').click()
    };

    removeAllElementIfTheCartIsNotEmpty(){
        cy.get("body").then($body => {
            if($body.find(this.buttonRemoveItem).length > 0) {
                cy.get(this.buttonRemoveItem).click({multiple:true});
            }
        })
        return this;
    }

    }
    
    export const cartPage = new CartPage();