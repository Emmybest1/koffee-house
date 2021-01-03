///<reference types="cypress"/>

describe('home component test', () => {
  before(() => {
    cy.visit('/');
  });

  it('should test that Shop Now content exist on the ui', () => {
    cy.contains('Shop Now');
    expect(cy.contains('Shop Now')).to.be.not.false;
  });

  it('should test that Opening hours exist on ui', () => {
    expect(cy.contains('Opening hours')).to.be.not.false;
  });

  it('should test the menubar icon button, and ensure it opens the menu panel', () => {
    cy.get('[data-test="menubar-btn"]').click();
    expect(cy.contains('HOME')).to.be.not.false;
    expect(cy.contains('SHOP')).to.be.not.true;
    expect(cy.contains('WISHLIST')).to.be.not.true;
    cy.get('[data-test="fa-times"]').click();
  });
});
