/// <reference types="cypress-xpath" />


import {loginPage} from "../pageObjects/LoginPage";
import CommonPage from "../pageObjects/CommonPage";
import {signupPage} from "../pageObjects/SignupPage";


const commonPage = new CommonPage;

describe('1. Register' , () => {
    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
        commonPage
            .clickXpathElement(commonPage.navigationLoginButtonSignup)
            .pageUrlValidation("/login")
            .checkIfTextIsPresented("New User Signup!");
    });

    it('1.1. User registration', () => {
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
    })

    it('1.2. User registration with existing email', () => {
        loginPage
            .enterNameAndExistEmail()
        commonPage
            .clickElement(loginPage.buttonSignup)
            .checkIfTextIsPresented("Email Address already exist!")
    })
});

describe('2. Login', () => {
    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
        commonPage
            .clickXpathElement(commonPage.navigationLoginButtonSignup)
            .pageUrlValidation("/login")
            .checkIfTextIsPresented("Login to your account");

    });

    it('2.1. User login with correct email and password', () => {
        signupPage
            .enterEmailAndPassword();
        commonPage
            .clickElement(signupPage.buttonLogin);
        signupPage.
            checkTheUSerIsLogged(signupPage.loggedInAs);
    })

    it('2.2. User login with incorrect email and password', () => {
        signupPage
            .enterIncorrectEmailAndPassword();
        commonPage
            .clickElement(signupPage.buttonLogin)
            .checkIfTextIsPresented("Your email or password is incorrect!");
    })

    it('2.3. User logout', () => {
        signupPage
            .enterEmailAndPassword();
        commonPage
            .clickElement(signupPage.buttonLogin);
        signupPage
            .checkTheUSerIsLogged(signupPage.loggedInAs);
        commonPage
            .clickXpathElement(commonPage.navigationButtonLogout)
            .checkIfXpathElementIsPresent(commonPage.navigationLoginButtonSignup)
    })
});





