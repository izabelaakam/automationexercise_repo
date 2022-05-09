/// <reference types="cypress-xpath" />

import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import {mainPage} from "../../pageObjects/MainPage"
import {loginPage} from "../../pageObjects/LoginPage"
import CommonPage from "../../pageObjects/CommonPage"
import {signupPage} from "../../pageObjects/SignupPage";


const commonPage = new CommonPage;


Given(/^The user goes to the main page$/, () => {
    cy.visit("https://www.automationexercise.com/");
});

When(/^The user clicks on the Signup-Login button$/, () => {
    commonPage.clickXpathElement(commonPage.navigationLoginButtonSignup);

});

Then(/^The login page is opened$/, () => {
    commonPage.pageUrlValidation("/login");
})

And(/^The New User Signup! is visible$/,() => {
    commonPage.checkIfTextIsPresented("New User Signup!");
})

And(/The Login to your account is visible$/, () => {
    commonPage.checkIfTextIsPresented("Login to your account");
})

When(/^The user enter name and email address$/, () => {
    loginPage.enterNameAndEmail();
})

And (/^The user clicks on the Signup button$/, () => {
    commonPage.clickElement(loginPage.buttonSignup);
})

Then(/^The ENTER ACCOUNT INFORMATION is visible$/, () => {
    commonPage.checkIfTextIsPresented("Enter Account Information");
})

When(/^The user fills details: Title, Name, Email, Password, Date of birth$/, () => {
    signupPage.fillAccountInformation();
})

And(/The user fills details: First name, Last name, Address, Country, State, City, Zipcode, Mobile Number$/, () => {
    signupPage.fillAddressInformation();
})

And(/The user clicks on the Create Account button$/, () => {
    commonPage.clickElement(signupPage.buttonCreateAccount);
})

Then(/The ACCOUNT CREATED! is visible$/, () => {
    commonPage.checkIfTextIsPresented("Account Created!");
})

When(/The user clicks Continue button$/, () => {
    commonPage.clickElement(signupPage.buttonContinueAccount);
})

Then(/The Logged in as username is visible$/, () => {
    signupPage.checkTheUSerIsLogged(signupPage.loggedInAs);
})

When(/The user enter email and password$/, () => {
    signupPage.enterEmailAndPassword();
})

And(/The user clicks on the Login button$/, () => {
    commonPage.clickElement(signupPage.buttonLogin);
})