describe('connexion et ajouter un produit', () => {
    it('visite du site', () => {
cy.visit('https://www.ornikar.com/');
cy.get('#axeptio_btn_acceptAll').click();
cy.get('[href="/code"]').eq(0).click();
cy.get('[data-testid="sign-up-button"]').eq(1).click();
cy.get('[name="firstname"]').type('Léa');
cy.get('[name="lastname"]').type('Côme');
cy.get('[type="number"]').eq(0).type('16');
cy.get('[type="number"]').eq(1).type('08');
cy.get('[type="number"]').eq(2).type('1992');
cy.get('[name="zipcode"]').type('78800');
cy.get('[name="phone"]').type('0632904325');
cy.get('[type="email"]').type('lilou.come@gmail.com');
cy.get('[name="password"]').type('Fitec922023!');
cy.get('[type="checkbox"]').eq(1).click({force:true});

});
}
)