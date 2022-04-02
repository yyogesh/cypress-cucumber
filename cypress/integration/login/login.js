import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { HomeSaucePage } from "../../pages/saucedemo/homeSaucePage";

const homeSaucePage = new HomeSaucePage

Given('A user opens the login page', () => {
    cy.visit('/');
});

When('A user enter the username {string}', (username) => {
    homeSaucePage.typeUsername(username);
});

When('A user provides incorrect crednetials', (table) => {
    table.hashes().forEach(row => {
        cy.log(row.username);
        cy.log(row.password);
        homeSaucePage.typeUsername(row.username);
        homeSaucePage.typePassword(row.password);
    });
});

And('A user enter the password {string}', (password) => {
    homeSaucePage.typePassword(password);
});

And('A user clicks on the login button', () => {
    homeSaucePage.clickLogin();
});

Then('A user will be logged in', () => {
    cy.url().should('contains', '/inventory.html');
});

Then('A user will {string} message', (errorMessage) => {
    homeSaucePage.elements.errorMessage().should('have.text', errorMessage)
})