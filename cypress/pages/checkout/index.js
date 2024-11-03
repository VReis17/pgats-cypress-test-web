class Checkout {
    placeOrder() {
        cy.get('.form-control').type('Nice product');
        cy.get('.btn-default.check_out').click();
    }


}

export default new Checkout()