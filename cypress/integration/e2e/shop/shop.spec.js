///<reference types="cypress"/>

/*-------------------------------------------
 Test spec for shopping view
---------------------------------------------*/
describe("Shopping view", () => {
    before(() => cy.visit("/shop"));

    it("should check product availability", () => {
        console.log("Test");
        cy.get(".shop-items-container").then((shopItemContainer) => {
            expect(cy.wrap(shopItemContainer).find("h3")).to.be.not.empty;
        });
    });
});
