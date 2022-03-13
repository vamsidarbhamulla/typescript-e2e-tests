export function uploadFileAndConfirm(fileName: string) {
  cy.location('href').should('contain', 'cart');
  cy.log(`filename:${fileName}`);
  cy.get('.file_title_clean').scrollIntoView().should('be.visible');

  cy.fixture(fileName).then(fileContent => {
    cy.get('input[type="file"]').attachFile(
      {
        fileContent,
        fileName,
        encoding: 'utf8',
        lastModified: new Date().getTime()
      },
      {
        subjectType: 'input'
      }
    );
  });
  cy.get('input[value="Upload File"]').click();
}

export function verifyUpload(fileName: string, isSuccess: boolean = true) {
  let message = `File ${fileName} uploaded successfully`;
  if (!isSuccess) {
    message = `File ${fileName} not uploaded`;
  } else {
    cy.get('#wfu_messageblock_header_1_label', { timeout: 5000 }).should('have.text', 'Uploading...');
  }
  cy.get('.file_messageblock_fileheader_label', { timeout: 5000 }).should('have.text', message);
}
