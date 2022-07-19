/// <reference types="Cypress-xpath" />
import CommonPage from "./CommonPage";

class SignupPage extends CommonPage {
    //Selectors section
    buttonCreateAccount: string = '[data-qa="create-account"]';
    buttonContinueAccount: string = '[data-qa="continue-button"]';
    loggedInAs: string = '//*[text()=" Logged in as "]';
    buttonDeleteAccount: string = '//*[text()=" Delete Account"]';
    buttonLogin: string = '[data-qa="login-button"]';

     //Methods section
     fillAccountInformation(){
        cy.fixture("testdata").then((newUser) => {
            cy.get('[type="radio"]').first().check();
            cy.get('[data-qa="name"]').should('have.value', newUser.name);
            cy.get('[data-qa="email"]').invoke("val").should('not.be.empty');
            cy.get('[data-qa="password"]').type(newUser.password);
            cy.get('[data-qa="days"]').select('3').should('have.value', '3');
            cy.get('[data-qa="months"]').select('May').should('have.value', '5');
            cy.get('[data-qa="years"]').select('1980').should('have.value', '1980');
            cy.get('[type="checkbox"]').check();
        });
        return this;
    }

    fillAddressInformation(){
        cy.fixture("testdata").then((newUser) => {
            cy.get('[data-qa="first_name"]').type(newUser.firstName);
            cy.get('[data-qa="last_name"]').type(newUser.lastName);
            cy.get('[data-qa="address"]').type(newUser.address);
            cy.get('[data-qa="country"]').select('United States').should('have.value', 'United States');
            cy.get('[data-qa="state"]').type(newUser.state);
            cy.get('[data-qa="city"]').type(newUser.city);
            cy.get('[data-qa="zipcode"]').type(newUser.zipcode);
            cy.get('[data-qa="mobile_number"]').type(newUser.mobileNumber);
        }); 
        return this;   
    }

    checkTheUSerIsLogged (selector: string) {
        cy.fixture("testdata").then((newUser) => {
            cy.xpath(selector).invoke("text").should('contain', newUser.name);          
        });
        return this;
    }

    enterEmailAndPassword(){
        cy.fixture("testdata").then((loginUser) => {
            cy.get('[data-qa="login-email"]').type(loginUser.email);
            cy.get('[data-qa="login-password"]').type(loginUser.password);
        })
        return this;
    }

    enterIncorrectEmailAndPassword(){
        cy.get('[data-qa="login-email"]').type("incorrect@gmail.com");
        cy.get('[data-qa="login-password"]').type("incorrectPassword");
        return this;
    }




}
    export const signupPage = new SignupPage();