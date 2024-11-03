class Login {
    loginAplication() {
        cy.get('[data-qa="login-email"]').type('teste.automation1712@tests.com.br')
        cy.get('[data-qa="login-password"]').type('QA@2024', { log: false })
        cy.get('[data-qa="login-button"]').click()
    }

    loginAplicationInvalidCredentials() {
        cy.get('[data-qa="login-email"]').type('teste.automation1712@tests.com.br')
        cy.get('[data-qa="login-password"]').type('QA@2027', { log: false })
        cy.get('[data-qa="login-button"]').click()
    }

    registerExistingUser() {
        cy.get('[data-qa="signup-name"]').type('QA Enginner')
        cy.get('[data-qa="signup-email"]').type('teste.automation1712@tests.com.br')
        cy.contains('button', 'Signup').click()
    }

    registerUser() {
        cy.get('[data-qa="signup-name"]').type('QA Enginner')
        cy.get('[data-qa="signup-email"]').type('teste.automation17121@tests.com.br')
        cy.contains('button', 'Signup').click()
    }

}

export default new Login()