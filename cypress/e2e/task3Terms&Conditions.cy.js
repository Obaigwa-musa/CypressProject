// Terms and conditions

/// <reference types="cypress"/>

it('Google search', () => {
  // Set the viewport to 1280x720
  cy.viewport(1280, 720);
  cy.visit('https://www.imbankgroup.com/ke/');
  cy.get('#menu-item-153 > a').click();
  cy.get('.dropdown-select > .media > .dropdown-media-text').click();
  cy.get('[data-filter-value="Carrefour & Mastercard Campaign Terms and Conditions"] > .media > .dropdown-media-text').click();
  cy.get('#carrefour-amp-mastercard-campaign-terms-and-conditions-1-heading > h2.mb-0 > .btn > .accordion-1-title-text').click();
})