/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import {checkoutPage} from "../pageObjects/CheckoutPage";
import {cartPage} from "../pageObjects/CartPage"
import { signupPage } from "../pageObjects/SignupPage";



const commonPage = new CommonPage;

describe('1. Cart page tests', () => {
    beforeEach(() => {
        cy.visit("http://automationexercise.com/");
        commonPage.checkElementIsDisplayed(checkoutPage.containerProductItems);
    })

    it('1.1. Add two items to Cart', () => {
        checkoutPage
            .addFirstItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .continueShopping()
            .addSecondItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .goToCart();
        commonPage
            .pageUrlValidation("/view_cart")
            .checkElementIsDisplayed('#product-1')
            .checkElementIsDisplayed('#product-2');
    })

    it('1.2. Verify an item quantity in Cart', () => {
        checkoutPage
            .takeNameAndPriceAndSaveFirstItem()
            .findFirtItem();
        commonPage
            .pageUrlValidation("/product_details/1");
        checkoutPage
            .verifyDetailsAreTheSame()
            .increaseItem(4);
        commonPage
            .clickElement(checkoutPage.buttonAddToCartOnDetailsPage)
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .goToCart();
        commonPage
            .pageUrlValidation("/view_cart")
            .checkElementIsDisplayed('#product-1');
        cartPage
            .checkQuantity(4);
    })

    it('1.3. Remove an item from Cart when there is one item', () => {
        checkoutPage
            .addFirstItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .goToCart();
        commonPage
            .pageUrlValidation("/view_cart")
            .checkElementIsDisplayed('#product-1')
            .clickElement(cartPage.buttonRemoveItem)
            .checkIfElementContainText(cartPage.notificationEmptyCart, "Cart is empty!");
    })

    it('1.4. Remove an item from Cart when there are two items', () => {
        checkoutPage
            .addFirstItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .continueShopping()
            .addSecondItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .goToCart();
        commonPage
            .pageUrlValidation("/view_cart")
            .checkElementIsDisplayed('#product-1')
            .checkElementIsDisplayed('#product-2')
            .clickFirstElement(cartPage.buttonRemoveItem)
            .checkElementIsNotExist('#product-1');
    })

    it('1.5. Remove all items from Cart', () => {
        checkoutPage
            .addFirstItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .continueShopping()
            .addSecondItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .goToCart();
        commonPage
            .pageUrlValidation("/view_cart")
            .checkElementIsDisplayed('#product-1')
            .checkElementIsDisplayed('#product-2')
            .clickAllElement(cartPage.buttonRemoveItem)
            .checkIfElementContainText(cartPage.notificationEmptyCart, "Cart is empty!");
    })

})

    describe('2. Cart page tests with login', () => {
        beforeEach('remove all item from Cart', () => {
            cy.visit("http://automationexercise.com/");
            commonPage
                .clickXpathElement(commonPage.navigationLoginButtonSignup)
                .pageUrlValidation("/login")
                .checkIfTextIsPresented("Login to your account");
            signupPage
                .enterEmailAndPassword();
            commonPage 
                .clickElement(signupPage.buttonLogin);
            signupPage
                .checkTheUSerIsLogged(signupPage.loggedInAs);
            commonPage
                .clickXpathElement(commonPage.navigationButtonCart)
                .pageUrlValidation("/view_cart");
            cartPage
                .removeAllElementIfTheCartIsNotEmpty()
            commonPage
                .checkIfElementContainText(cartPage.notificationEmptyCart, "Cart is empty!")
                .clickXpathElement(commonPage.navigationButtonLogout)
                .checkIfXpathElementIsPresent(commonPage.navigationLoginButtonSignup)
                .clickXpathElement(commonPage.navigationButtonHome);
        })


    it('2.1. Verify Cart after login', () => {

        commonPage
            .clickXpathElement(commonPage.navigationButtonCart)
            .pageUrlValidation("/view_cart")
            .checkIfElementContainText(cartPage.notificationEmptyCart, "Cart is empty!")
            .clickXpathElement(commonPage.navigationButtonHome);
        checkoutPage
            .addFirstItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .goToCart();
        commonPage
            .pageUrlValidation("/view_cart")
            .checkElementIsDisplayed('#product-1')
            .clickXpathElement(commonPage.navigationLoginButtonSignup)
            .pageUrlValidation("/login")
            .checkIfTextIsPresented("Login to your account");
        signupPage
            .enterEmailAndPassword();
        commonPage
            .clickElement(signupPage.buttonLogin);
        signupPage
            .checkTheUSerIsLogged(signupPage.loggedInAs);
        commonPage
            .clickXpathElement(commonPage.navigationButtonCart)
            .pageUrlValidation("/view_cart")
            .checkElementIsDisplayed('#product-1');
    })

})



