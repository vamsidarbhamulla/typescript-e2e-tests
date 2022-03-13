// eslint-disable-next-line import/no-extraneous-dependencies
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { ContactDetails, User } from '@tests/shared/models';

Given(/^that (.*) wants to contact team$/, () => {
  cy.visit('/');
});

Given(/^that (.*) wants to send a message to contact team$/, () => {
  cy.visit('/');
});

When(/^s?he open the contact menu option$/, () => {
  cy.get('.menu-item').contains('Contact').click();
  cy.get('.elementor-image-box-title').contains('Address').should('be.visible');
  cy.get('.elementor-image-box-title').contains('Email').should('be.visible');
  cy.get('.elementor-image-box-title').contains('Phone').should('be.visible');
  cy.get('.elementor-image-box-title').contains('Time').should('be.visible');
});

Then(/^s?he should see the contact information$/, (dataTable: any) => {
  cy.log(`raw : ${dataTable.raw()}`);
  cy.log(`rows : ${dataTable.rows()}`);
  cy.log(`HASHES : ${dataTable.hashes()}`);

  const contactData = dataTable.hashes() as Array<ContactDetails>;
  const contactDataType = contactData.map(({ contactType }) => ({
    contactType
  }));
  const contactDataValue = contactData.map(({ contactValue }) => ({
    contactValue
  }));
  cy.log(`contactData : ${contactData}`);
  cy.log(`contactDataType : ${contactDataType}`);
  cy.log(`contactDataValue : ${contactDataValue}`);
  cy.get('.elementor-image-box-title').eq(0).scrollIntoView();

  cy.get('.elementor-image-box-title').each((_$el, index, arr) => {
    expect(arr[index].textContent).to.contains(contactData[index].contactType);
  });
  cy.get('.elementor-image-box-description').each((_$el, index, arr) => {
    expect(arr[index].textContent).to.contains(contactData[index].contactValue);
  });
});

Then(/^s?he should be able to submit the message$/, () => {
  cy.newUserData().then((user: any) => {
    const contactUser = user as User;
    if (contactUser.email && contactUser.phone && contactUser.name) {
      cy.get('.contact-name input').type(contactUser.name);
      cy.get('.contact-email input').type(contactUser.email);
      cy.get('.contact-phone input').type(contactUser.phone);
      cy.get('.contact-message textarea').type('An enquiry on winter jacket availability');
      cy.get('button[type="submit"]').contains('Submit').click();
      cy.get('.everest-forms-notice.everest-forms-notice--success').should('contain.text', 'Thanks for contacting us! We will be in touch with you shortly');
    }
  });
});
