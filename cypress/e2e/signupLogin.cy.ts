/// <reference types="cypress-xpath" />


import {loginPage} from "../pageObjects/LoginPage";
import CommonPage from "../pageObjects/CommonPage";
import {signupPage} from "../pageObjects/SignupPage";


const commonPage = new CommonPage;

describe('Register' , () => {
    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
        commonPage.clickXpathElement(commonPage.navigationLoginButtonSignup);
        commonPage.pageUrlValidation("/login");
        commonPage.checkIfTextIsPresented("New User Signup!");
    });

    it('Register user', () => {
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
        loginPage.enterNameAndExistEmail()
        commonPage.clickElement(loginPage.buttonSignup);
        commonPage.checkIfTextIsPresented("Email Address already exist!")
    })
});

describe('Login', () => {
    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
        commonPage.clickXpathElement(commonPage.navigationLoginButtonSignup);
        commonPage.pageUrlValidation("/login");
        commonPage.checkIfTextIsPresented("Login to your account");

    });

    it('Login User with correct email and password', () => {
        signupPage.enterEmailAndPassword();
        commonPage.clickElement(signupPage.buttonLogin);
        signupPage.checkTheUSerIsLogged(signupPage.loggedInAs);
    })

    it('Login User with incorrect email and password', () => {
        signupPage.enterIncorrectEmailAndPassword();
        commonPage.clickElement(signupPage.buttonLogin);
        commonPage.checkIfTextIsPresented("Your email or password is incorrect!");
    })

    it('Logout the user', () => {
        signupPage.enterEmailAndPassword();
        commonPage.clickElement(signupPage.buttonLogin);
        signupPage.checkTheUSerIsLogged(signupPage.loggedInAs);
        commonPage.clickXpathElement(commonPage.navigationButtonLogout);
        commonPage.checkIfXpathElementIsPresent(commonPage.navigationLoginButtonSignup)
    })
});





