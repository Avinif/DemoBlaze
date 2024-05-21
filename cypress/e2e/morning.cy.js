/// <reference types='cypress' />

describe('', () => {
  let user;
  before(() => {
    cy.visit('');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('', () => {
    cy.get('a').contains('Sign up').click();
    cy.wait(1000);
    cy.get('#sign-username').type(user.name + '{enter}');
    cy.get('#sign-password').type(user.password + '{enter}');
    cy.get('.btn').contains('Sign up').click();
    cy.on('window:alert', (alert) => {
        expect(alert).to.equal('Sign up successful.');
      });

    cy.get('a').contains('Log in').click();
    cy.wait(1000);
    cy.get('#loginusername').type(user.name);
    cy.get('#loginpassword').type(user.password);
    cy.get('.btn').contains('Log in').click();

    cy.get('.hrefch').contains('Samsung galaxy s6').click();
    cy.get('.btn').contains('Add to cart').click();
    cy.on('window:alert', (alert) => {
        expect(alert).to.equal('Product added');
      });
    
    cy.get('#cartur').click();
    cy.get('td').should('contain', 'Samsung galaxy s6');
  });
});
