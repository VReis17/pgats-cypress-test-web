/// <reference types="cypress" />
import home from "../pages/home";
import cart from "../pages/cart";
import login from "../pages/login";
import products from "../pages/products";
import signup from "../pages/signup";
import contact_us from "../pages/contact_us";
import checkout from "../pages/checkout";
import payment from "../pages/payment";

import formUserCreated from "../fixtures/formUserCreated.json";
import paymentForm from "../fixtures/paymentForm.json";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Automation Exercise', () => {

  beforeEach(async () => {
    home.openHomePage();
  });

  after(async () => {
    cy.request({
      method: 'DELETE',
      url: 'https://automationexercise.com/api/deleteAccount',
      form: true,
      body: {
        email: 'teste.automation17121@tests.com.br',
        password: 'QA@2024'
      }
    }).then((response) => {
      // Validação do status code da resposta
      expect(response.status).to.equal(200);

    });
  });

  it('Test Case 1: Register User', () => {

    home.navigateToSignUpPage();
    login.registerUser();
    signup.createUser(formUserCreated);
    // assert
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    cy.get('i.fa-user').parent().should('contain', formUserCreated.name);

    home.deleteAccount();

  });

  it('Test Case 2: Login User with correct email and password', () => {
    home.navigateToSignUpPage();
    login.loginAplication();
    // assert
    cy.get('i.fa-user').parent().should('contain', 'QA Enginner');
  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    home.navigateToSignUpPage();
    login.loginAplicationInvalidCredentials();
    // assert
    cy.get('p').should('contain', 'Your email or password is incorrect!');

  });

  it('Test Case 4: Logout User', () => {
    home.navigateToSignUpPage();
    login.loginAplication();
    // assert
    cy.get('i.fa-user').parent().should('contain', 'QA Enginner');
    home.logoutApplication();
    // assert
    cy.url().should('contain', 'login');
    cy.contains("Login to your account").should("be.visible");
  });

  it('Test Case 5: Register User with existing email', () => {
    home.navigateToSignUpPage();
    login.registerExistingUser();
    // assert
    cy.get('.signup-form form p')
      .should('be.visible')
      .and('contain', 'Email Address already exist!')
  });

  it('Test Case 6: Contact Us Form', () => {
    home.navigateToContactUsPage();
    // assert
    cy.get('.contact-form h2')
      .should('be.visible')
      .and('have.text', 'Get In Touch')
    contact_us.fillContactForm();
    contact_us.submitContact();
    // assert
    cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    home.navigateToProductsPage();
    // assert
    products.isPageLoaded();
    products.selectFirstProduct();
    // assert
    // product name, category, price, availability, condition, brand
    products.checkProductInformation();

  });

  it('Test Case 9: Search Product', () => {
    home.navigateToProductsPage();
    // assert
    products.isPageLoaded();
    products.searchProduct('Dress');
    // assert
    products.checkResults();
  });

  it('Test Case 10: Verify Subscription in home page', () => {
    home.subscribeEmail();
    // assert
    cy.contains('You have been successfully subscribed!').should('be.visible')
  });

  it('Test Case 15: Place Order: Register before Checkout', () => {
    home.navigateToSignUpPage();
    login.registerUser();
    signup.createUser(formUserCreated);
    // assert
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
    cy.get('i.fa-user').parent().should('contain', formUserCreated.name);
    home.addProductToCartToView();
    cart.checkoutProduct();
    checkout.placeOrder();
    payment.confirmOrder(paymentForm);
    home.deleteAccount();
  });
})