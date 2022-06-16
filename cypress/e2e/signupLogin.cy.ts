/// <reference types="cypress-xpath" />


import {mainPage} from "../pageObjects/MainPage"
import {loginPage} from "../pageObjects/LoginPage"
import CommonPage from "../pageObjects/CommonPage"
import {signupPage} from "../pageObjects/SignupPage";


const commonPage = new CommonPage;

describe('Register' , () => {

    it('Register user', () => {
        cy.visit("https://www.automationexercise.com/");
        commonPage.clickXpathElement(commonPage.navigationLoginButtonSignup);
        commonPage.pageUrlValidation("/login");
        commonPage.checkIfTextIsPresented("New User Signup!");
        loginPage.enterNameAndNewEmail();
        commonPage.clickElement(loginPage.buttonSignup);
        commonPage.checkIfTextIsPresented("Enter Account Information");
        signupPage.fillAccountInformation();
        signupPage.fillAddressInformation();
        commonPage.clickElement(signupPage.buttonCreateAccount);
        commonPage.checkIfTextIsPresented("Account Created!");
        commonPage.clickElement(signupPage.buttonContinueAccount);
        signupPage.checkTheUSerIsLogged(signupPage.loggedInAs);
    })

    it('Register user with existing email', () => {
        commonPage.clickXpathElement(commonPage.navigationLoginButtonSignup);
        commonPage.pageUrlValidation("/login");
        commonPage.checkIfTextIsPresented("New User Signup!");
        loginPage.enterNameAndExistEmail()
        commonPage.clickElement(loginPage.buttonSignup);
        commonPage.checkIfTextIsPresented("Email Address already exist!")
    })
});

describe('Login', () => {

    it('Login User with correct email and password', () => {
        cy.visit("https://www.automationexercise.com/");
        commonPage.clickXpathElement(commonPage.navigationLoginButtonSignup);
        commonPage.pageUrlValidation("/login");
        commonPage.checkIfTextIsPresented("Login to your account");
        signupPage.enterEmailAndPassword();
        commonPage.clickElement(signupPage.buttonLogin);
        signupPage.checkTheUSerIsLogged(signupPage.loggedInAs);
    })

    it('Login User with incorrect email and password', () => {
        cy.visit("https://www.automationexercise.com/");
        commonPage.clickXpathElement(commonPage.navigationLoginButtonSignup);
        commonPage.pageUrlValidation("/login");
        commonPage.checkIfTextIsPresented("Login to your account");
        signupPage.enterIncorrectEmailAndPassword();
        commonPage.clickElement(signupPage.buttonLogin);
        commonPage.checkIfTextIsPresented("Your email or password is incorrect!");
    })

    it('Logout the user', () => {
        cy.visit("https://www.automationexercise.com/");
        commonPage.clickXpathElement(commonPage.navigationLoginButtonSignup);
        commonPage.pageUrlValidation("/login");
        commonPage.checkIfTextIsPresented("Login to your account");
        signupPage.enterEmailAndPassword();
        commonPage.clickElement(signupPage.buttonLogin);
        signupPage.checkTheUSerIsLogged(signupPage.loggedInAs);
        commonPage.clickXpathElement(commonPage.navigationButtonLogout);
        commonPage.checkIfXpathElementIsPresent(commonPage.navigationLoginButtonSignup)
    })
})



