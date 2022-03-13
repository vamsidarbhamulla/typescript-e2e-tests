// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(/^that (.*) wants to upload a file$/, () => {
  cy.visit('/');
});

When(/^s?he selects a file (.*) to upload$/, (file: string) => {
  cy.get('.tg-icon-shopping-cart').eq(0).click();
  const fileName = file.trim();
  cy.uploadFileAndConfirm(fileName);
});

Then(/^s?he should see the message (.*) file uploaded successfully$/, (file: string) => {
  cy.verifyUpload(file.trim(), true);
});

Then(/^s?he should see the message (.*) file not uploaded$/, (file: string) => {
  cy.verifyUpload(file.trim(), false);
});
