/// <reference types="Cypress-xpath" />
import CommonPage from "./CommonPage";

class ProductsPage extends CommonPage {
    //Selectors section

    // containerProductItems: string = '*[class^="features_items"]';
    // buttonViewProduct: string = '*[class^="choose"]';
    // buttonAddToCart: string = '*[class^="btn btn-default add-to-cart"]';
    // buttonAddToCartOnDetailsPage: string = '*[class^="btn btn-default cart"]';
    // inputSearch: string = '#search_product';
    // itemName: string = '*[class^="productinfo text-center"]';
    // modalSuccessAddToCart: string = '*[id^="cartModal"]';
    // modalBody: string = '.modal-body';
    // modalFooter: string = '.modal-footer'
    // itemBox: string = '*[class^="productinfo text-center"]';
    // itemDetails: string = '.product-information';
    // panelFilterCategory: string = '#accordian';
    // panelFilterBrands: string= '.brands_products';
    // checkoutInfo: string = '[data-qa=checkout-info]';
    // boxInformation: string = '*[class^="col-xs-12 col-sm-6"]';
    // tableOrder: string = '*[class^="table table-condensed"]';


    
//      //Methods section

//      findFirtItem(){
//         cy.get(this.buttonViewProduct).first().click()
//      };

//      addFirstItemToCart(){
//         cy.get(this.buttonAddToCart).first().click()
//      };

//      addSecondItemToCart(){
//         cy.get(this.buttonAddToCart).eq(2).click()
//       };

//      takeNameAndPriceAndSaveFirstItem(){
//         cy.get(this.itemBox)
//         .first()
//         .find('p')
//         .invoke('text')
//         .then(( firstItemName:any) => {
//             cy.log(firstItemName)
//          })
//         .as("firstItemName")
        
//         cy.get(this.itemBox)
//         .first()
//         .find('h2')
//         .invoke('text')
//         .then(( firstItemPrice) => {
//             cy.log(firstItemPrice)
//          })
//          .as("firstItemPrice")
//      }

//      verifyDetailsAreTheSame(){
//         cy.get(this.itemDetails)
//         .find('h2')
//         .invoke('text')
//         .then( (itemName:any) => {
//             cy.log(itemName)
//             cy.get('@firstItemName').should('equal', itemName)
//         });

//         cy.get(this.itemDetails).parent().within(() => {
//             cy.get('span')
//             .find('span')
//             .invoke('text')
//             .then( (itemPrice:any) => {
//                 cy.log(itemPrice)
//                 cy.get('@firstItemPrice').should('equal', itemPrice)
//             })
//         })    
//     };

//     searchProduct() {
//         cy.get('#search_product').type("winter top")
//         cy.get('#submit_search').click()
//     };

//     verifySearchedProduct() {
//         // cy.wait(1500);
//         cy.get(this.itemName).find('p').contains("Winter Top")
//     };

//     goToCart(){
//         cy.get('.modal-body').find('a[href="/view_cart"]').click()
//     };
    
//     continueShopping(){
//         cy.get('.modal-footer').find('button').click()
//     };

//     chooseWomanDressFilter(){
//         cy.get('.panel-heading').first().parent().within(() => {
//         	cy.get('.panel-title')
//         	.find('[href="#Women"]')
//         	.click()
//         });
//         cy.get('.panel-body').first()
//         .find('a:contains(Dress)')
//         .click()
//     };

//     chooseManJeansFilter(){
//         cy.get('.panel-heading').eq(1).parent().within(() => {
//         	cy.get('.panel-title')
//         	.find('[href="#Men"]')
//         	.click()
//         });
//         cy.get('.panel-body').eq(1)
//         .find('a:contains(Jeans)')
//         .click()
//     };

//     chooseKidsTopsFilter(){
//         cy.get('.panel-heading').eq(2).parent().within(() => {
//         	cy.get('.panel-title')
//         	.find('[href="#Kids"]')
//         	.click()
//         });
//         cy.get('.panel-body').eq(2)
//         .find('a:contains(Tops & Shirts)')
//         .click()
//     };

//     chooseBrandPoloFilter(){
//         cy.get('.brands-name')
//         .find('li:contains(Polo)')
//         .click()
//     };

//     increaseItem(number){
//         cy.get(this.itemDetails)
//         .find('#quantity')
//         .clear()
//         .type(number)
//     }

//     takeQuantityAndSave(){
//         cy.get(this.itemDetails)
//         .find('#quantity')
//         .invoke('text')
//         .then(( quantityValue) => {
//             cy.log(quantityValue)
//          })
//          .as("quantityValue")
//      }


//     verifyDeliveryAddress(){
//         cy.fixture("testdata").then((newUser) => {
//             cy.get('.row').parent(this.checkoutInfo).within(() => {
//         	    cy.get(this.boxInformation).first()
//         	    .find('ul > li').then(function($list){
//                     expect($list.eq(1)).to.contain(newUser.firstName + ' ' + newUser.lastName)
//                     expect($list.eq(3)).to.contain(newUser.address)
//                     expect($list.eq(5)).to.contain(newUser.city + ' ' + newUser.state)
//                     expect($list.eq(5)).to.contain(newUser.zipcode)
//                     expect($list.eq(7)).to.contain(newUser.mobileNumber)
//             })
//             })
//         }) 
//     }    

//     verifyOrder(){
//         cy.get(this.tableOrder).parent('#cart_info').within(()=> {
//             cy.get('#product-1')
//             .find('.cart_description > h4 > a')
//             .invoke('text')
//             .then( (itemCheckoutName:any) => {
//                 cy.log(itemCheckoutName)
//                 cy.get('@firstItemName').should('equal', itemCheckoutName)
//         })
//         })

//         cy.get(this.tableOrder).parent('#cart_info').within(()=> {
//             cy.get('#product-1')
//             .find('.cart_price > p')
//             .invoke('text')
//             .then( (itemCheckoutPrice:any) => {
//                 cy.log(itemCheckoutPrice)
//                 cy.get('@firstItemPrice').should('equal', itemCheckoutPrice)
//         })
//         })


//     }
// }    
    

//     export const productsPage = new ProductsPage();


