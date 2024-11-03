class Home {

    openHomePage() {
        cy.visit('https://automationexercise.com');
    }

    navigateToSignUpPage() {
        cy.get('[href$=login]').click()
    }

    navigateToCartPage() {
        cy.get('[href$=view_cart]').click()
    }

    navigateToProductsPage() {
        cy.get('[href$=products]').click()
    }

    navigateToContactUsPage() {
        cy.get('[href$=contact_us]').click()
    }

    logoutApplication() {
        cy.contains('Logout').click()
    }

    deleteAccount() {
        cy.get('[href *="delete"]').click();
        cy.get('b').should('contain', 'Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();
    }

    subscribeEmail() {
        cy.get('input#susbscribe_email')
            .scrollIntoView()
            .type('teste.automation1712@tests.com.br')

        cy.get('button#subscribe').click();
    }

    addProductToCartToView() {
        cy.contains("Add to cart").click();
        cy.contains("View Cart").click();
    }
}

export default new Home()