// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^that (.*) wants to buy (?:Converse|an item|books)$/, () => {
  cy.visit('/');
});

When(/^s?he searches for (.*) using the navigation menu$/, (item: string) => {
  cy.get('.menu-item').contains('Shop').click();
  cy.get('#woocommerce-product-search-field-0').type(item);
  cy.get('button[value="Search"]').click();
});

Then(/^s?he should see the list of (.*) with prices available for sale$/, (item: string) => {
  cy.location('href').should('contain', item);
  cy.get('.woocommerce-Price-currencySymbol').eq(0).scrollIntoView().should('be.visible');
});

Then(/^s?he should see the message of no products were found$/, () => {
  cy.get('.woocommerce-info').should('have.text', 'No products were found matching your selection.');
});
