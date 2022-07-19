/// <reference types="cypress-xpath" />


import CommonPage from "../pageObjects/CommonPage";
import { loginPage } from "../pageObjects/LoginPage";
import { signupPage } from "../pageObjects/SignupPage";
import { checkoutPage } from "../pageObjects/CheckoutPage";
import { cartPage } from "../pageObjects/CartPage";

const commonPage = new CommonPage;

describe('1. Place Order with registration', () => {
    beforeEach(() => {
        cy.visit("http://automationexercise.com/");
    })

    it('1.1. Place Order: Register while Checkout', () => {
        commonPage
            .checkElementIsDisplayed(checkoutPage.containerProductItems);
        checkoutPage
            .takeNameAndPriceAndSaveFirstItem()
            .addFirstItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .goToCart();
        commonPage
            .pageUrlValidation("/view_cart")
            .checkElementIsDisplayed('#product-1')
            .clickElement(checkoutPage.buttonProccessToCheckout)
            .checkElementIsDisplayed(checkoutPage.modalCheckout);
        cartPage
            .goToRegisterLogin();
        loginPage
            .enterNameAndNewEmail();
        commonPage
            .clickElement(loginPage.buttonSignup)
            .checkIfTextIsPresented("Enter Account Information");
        signupPage
            .fillAccountInformation()
            .fillAddressInformation();
        commonPage
            .clickElement(signupPage.buttonCreateAccount)
            .checkIfTextIsPresented("Account Created!")
            .clickElement(signupPage.buttonContinueAccount);
        signupPage
            .checkTheUSerIsLogged(signupPage.loggedInAs);
        commonPage
            .clickXpathElement(commonPage.navigationButtonCart)
            .clickElement(checkoutPage.buttonProccessToCheckout);
        checkoutPage
            .verifyDeliveryAddress()
            .verifyOrder();
    })

    it('1.2. Place Order: Register before Checkout', () => {
        commonPage
            .clickXpathElement(commonPage.navigationLoginButtonSignup)
            .pageUrlValidation("/login")
            .checkIfTextIsPresented("New User Signup!");
        loginPage
            .enterNameAndNewEmail();
        commonPage
            .clickElement(loginPage.buttonSignup)
            .checkIfTextIsPresented("Enter Account Information");
        signupPage
            .fillAccountInformation()
            .fillAddressInformation();
        commonPage
            .clickElement(signupPage.buttonCreateAccount)
            .checkIfTextIsPresented("Account Created!")
            .clickElement(signupPage.buttonContinueAccount);
        signupPage
            .checkTheUSerIsLogged(signupPage.loggedInAs);
        commonPage
            .clickXpathElement(commonPage.navigationButtonProducts)
            .pageUrlValidation("/products")
            .checkElementIsDisplayed(checkoutPage.containerProductItems);
        checkoutPage
            .takeNameAndPriceAndSaveFirstItem()
            .addFirstItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .goToCart();
        commonPage
            .pageUrlValidation("/view_cart")
            .checkElementIsDisplayed('#product-1')
            .clickElement(checkoutPage.buttonProccessToCheckout);
        checkoutPage
            .verifyDeliveryAddress()
            .verifyOrder();
    })

})

describe('2. Place Order with login', () => {
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

    it.only('2.1. Place Order: Login before Checkout', () => {
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
            .clickXpathElement(commonPage.navigationButtonProducts)
            .pageUrlValidation("/products")
            .checkElementIsDisplayed(checkoutPage.containerProductItems);
        checkoutPage
            .takeNameAndPriceAndSaveFirstItem()
            .addFirstItemToCart();
        commonPage
            .checkElementIsDisplayed(checkoutPage.modalSuccessAddToCart);
        checkoutPage
            .goToCart();
        commonPage
            .pageUrlValidation("/view_cart")
            .checkElementIsDisplayed('#product-1')
            .clickElement(checkoutPage.buttonProccessToCheckout);
        checkoutPage
            .verifyDeliveryAddress()
            .verifyOrder();
})

})

