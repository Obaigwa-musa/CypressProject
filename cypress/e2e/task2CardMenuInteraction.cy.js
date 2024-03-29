    // Credit card menu interaction

    /// <refernce types="cypress"/>

    it('Google search', ()=>{
    // Set the viewport to 1280x720
    cy.viewport(1280, 720);
    cy.visit('https://www.imbankgroup.com/ke/')
    // Personal menu
    cy.get('#menu-item-12094 > [href="https://www.imbankgroup.com/ke/personal/"]').click();
    // Cards
    cy.get('#menu-item-9654 > a').click();
    // Credit card
    cy.get(':nth-child(1) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
    // Click on Visa gold credit card
    cy.get(':nth-child(6) > .feature-30-body-col > .card > .text-gray-5 > .card-body > .card-type-22-title > .mx-height-content-holder').click();
     
})
