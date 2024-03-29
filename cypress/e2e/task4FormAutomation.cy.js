/// <refernce types="cypress"/>
describe('Fill form functinality',()=> {

it('Google search', ()=>{

    // Set the viewport to 1280x720
    cy.viewport(1280, 720);
    cy.visit('https://www.imbankgroup.com/ke/')
    cy.get('#menu-item-12094 > [href="https://www.imbankgroup.com/ke/personal/"]').click();
    cy.get('#menu-item-10550 > a').click();
    cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
    cy.get(':nth-child(7) > .container > .row > .col > .feature-14-container > .feature-14-body > :nth-child(1) > .card > .text-white > .card-type-6-body > .card-type-6-body-ls > .card-type-6-body-ls-lead > .h2').click();
    cy.get('#input_17_2').type('Musa');
    cy.get('#input_17_3').type('Obaigwa');
    cy.get('#input_17_4').type('+254 73631671');
    cy.get('#input_17_5').select('Parklands');
    cy.get('#choice_17_6_0').check();
    cy.get('#input_17_9_1').check();
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe')

    // Form not to be submited
   // cy.get('#gform_submit_button_17').click();


})
})

