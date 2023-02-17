describe('connexion et ajouter un produit', () => {
    it('visite du site', () => {
cy.visit('https://www.ornikar.com/');
cy.get('#axeptio_btn_acceptAll').click();
cy.contains("J'obtiens mon permis").click();
cy.contains("J'en profite").click({force:true});
cy.get('.kitt_Overlay_37xSj').click({force:true});
cy.get('[data-testid="go-to-insurance"]').click();
cy.get('[data-min-width-768="1b68e5d1lk3ay0"]').eq(1).click({force:true});
cy.get('[name="email"]').type('michael.knight@k2000.com');
cy.get('[href="https://espace-assure.ornikar.com/reset-password"]').click();
cy.get('[type="email"]').type('michael.knight@k2000.com');
cy.get('.kitt_Content_oxWk7').click();











});
}
)