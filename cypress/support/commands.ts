// eslint-disable-next-line import/no-extraneous-dependencies
import 'cypress-file-upload';
import { User } from '@tests/shared/models';
import { newUserData } from '../../libs/shared/core';
import { uploadFileAndConfirm, verifyUpload } from './uploadCommands';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      newUserData(): Chainable<User>;
      uploadFileAndConfirm(filename: string): Chainable<Subject>;
      verifyUpload(fileName: string, isSuccess: boolean): Chainable<Subject>;
    }
  }
}

Cypress.Commands.add('uploadFileAndConfirm', uploadFileAndConfirm);
Cypress.Commands.add('verifyUpload', verifyUpload);
Cypress.Commands.add('newUserData', () => cy.wrap('newUserData').then(() => newUserData()));
