class ContactUS {

    fillContactForm() {
        cy.get('[data-qa="name"]').type('QA Enginner')
        cy.get('[data-qa="email"]').type('teste.automation1712@tests.com.br')
        cy.get('[data-qa="subject"]').type('Test Automation')
        cy.get('[data-qa="message"]').type('Learning Test Automation')

        //cy.fixture('formUserCreated.json').as('arquivo')
        //cy.get('input[name="upload_file"]').selectFile('@arquivo')
    }

    submitContact() {
        cy.get('[data-qa="submit-button"]').click()
    }

}

export default new ContactUS()