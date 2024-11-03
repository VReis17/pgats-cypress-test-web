class Signup {

    createUser(formUserCreated) {

        cy.get('input[type=radio]').eq(formUserCreated.title).check();
        cy.get('[data-qa="password"]').type(formUserCreated.password, { log: false });
        cy.get('[data-qa=days]').select(formUserCreated.days);
        cy.get('[data-qa="months"]').select(formUserCreated.months);
        cy.get('[data-qa="years"]').select(formUserCreated.years);
        if (formUserCreated.newsletter) {
            cy.get('input[type=checkbox]#newsletter').check()
        }
        if (formUserCreated.optin) {
            cy.get('input[type=checkbox]#optin').check()
        }
        cy.get('[data-qa="first_name"]').type(formUserCreated.firstName);
        cy.get('[data-qa="last_name"]').type(formUserCreated.lastName);
        cy.get('[data-qa="company"]').type(formUserCreated.company);
        cy.get('[data-qa="address"]').type(formUserCreated.address);
        cy.get('[data-qa="country"]').select(formUserCreated.country);
        cy.get('[data-qa="state"]').type(formUserCreated.state);
        cy.get('[data-qa="city"]').type(formUserCreated.city);
        cy.get('[data-qa="zipcode"]').type(formUserCreated.zipcode);
        cy.get('[data-qa="mobile_number"]').type(formUserCreated.mobileNumber);
        cy.get('[data-qa="create-account"]').click();
    }
}

export default new Signup()