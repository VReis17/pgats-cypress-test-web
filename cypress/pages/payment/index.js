class Payment {

    confirmOrder(payment) {
        cy.get('[data-qa="name-on-card"]').type(payment.fullName);
        cy.get('[data-qa="card-number"]').type(payment.creditCardNumber);
        cy.get('[data-qa="cvc"]').type(payment.cvc);
        cy.get('[data-qa="expiry-month"]').type(payment.expiryMonth);
        cy.get('[data-qa="expiry-year"]').type(payment.expiryYear);
        cy.get('[data-qa="pay-button"]').click();
        cy.get('[data-qa="order-placed"]').should('be.visible');
    }


}

export default new Payment()