///<reference types="cypress"/>

/*-------------------------------------------
 Test spec for shopping view
---------------------------------------------*/
describe('Shop component', () => {
  before(() => cy.visit('/shop'));

  it('should check product availability', () => {
    cy.get('.shop-items-container').then((shopItemContainer) => {
      expect(cy.wrap(shopItemContainer).find('h3')).to.be.not.empty;
    });
  });
});
