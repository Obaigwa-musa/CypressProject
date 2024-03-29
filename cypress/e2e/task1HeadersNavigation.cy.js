// Navigation through headers in Homepage (Author Musa)

/// <refernce types="cypress"/>

it('Google search', ()=>{

  // Set the viewport to 1280x720
  cy.viewport(1280, 720);
  cy.visit('https://www.imbankgroup.com/ke/')
  // home
  cy.get('#menu-item-12092 > a').click();
   // Personal menu
  cy.get('#menu-item-12094 > [href="https://www.imbankgroup.com/ke/personal/"]').click();
  cy.get('#menu-item-10550 > a').click();
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(3) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get('#menu-item-9654 > a').click();
  cy.get(':nth-child(1) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(3) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get('#menu-item-10555 > a').click();
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get('#menu-item-10547 > a').click();
  cy.get('#menu-item-10548 > a').click();
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();  
  cy.get('#menu-item-10549 > a').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  // Business tab
  cy.get('[href="https://www.imbankgroup.com/ke/business/"]').click();
  //Accounts 
  cy.get('#menu-item-11734 > a').click();
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(3) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  // Biz tab - biz solutions
  cy.get('[href="https://www.imbankgroup.com/ke/business/"]').click();
  cy.get('#menu-item-11406 > a').click();
  cy.get(':nth-child(1) > .card > .text-white > .card-type-11-header > .card-type-11-header-cta > .card-type-11-header-cta-text').click();
  cy.get('#menu-item-11410 > a').click();
  // Biz tab - soln loans
  cy.get('#menu-item-11407 > a').click();
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  // Biz tab - investments
  cy.get('#menu-item-11409 > a').click();
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get('#menu-item-11408 > a').click();
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get('#menu-item-11411 > a').click();
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();  
  // Diaspora tab
  //Dias -accounts
  cy.get('#menu-item-12093 > [href="https://www.imbankgroup.com/ke/diaspora/"]').click();
  cy.get('#menu-item-11737 > a').click();
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(3) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();

  //  Dias cards
  cy.get('#menu-item-12093 > [href="https://www.imbankgroup.com/ke/diaspora/"]').click();
  cy.get('#menu-item-11738 > a').click();
  cy.get(':nth-child(1) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(3) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  // Dias loans
  cy.get('#menu-item-12093 > [href="https://www.imbankgroup.com/ke/diaspora/"]').click();
  cy.get('#menu-item-11741 > a').click(); 
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  //Investment
  cy.get('#menu-item-12093 > [href="https://www.imbankgroup.com/ke/diaspora/"]').click();
  cy.get('#menu-item-11744 > a').click(); 
  //insurance
  cy.get('#menu-item-12093 > [href="https://www.imbankgroup.com/ke/diaspora/"]').click();
  cy.get('#menu-item-11745 > a').click(); 
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get(':nth-child(2) > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  //Find an agent
  cy.get('#menu-item-12093 > [href="https://www.imbankgroup.com/ke/diaspora/"]').click();
  cy.get('#menu-item-11736 > a').click(); 
  //Transfers
  cy.get('#menu-item-12093 > [href="https://www.imbankgroup.com/ke/diaspora/"]').click();
  cy.get('#menu-item-11742').click(); 
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  cy.get('.active > .feature-6-list-item-content > .feature-6-list-item-content-in > .feature-6-list-item-text').click();
  // About us tab
  cy.get('#menu-item-12100 > :nth-child(1)').click();
  cy.get('#menu-item-12178 > a').click();
  cy.get('#menu-item-14104 > a').click();
  cy.get('#menu-item-11764 > a').click();
  cy.get('#menu-item-11766 > a').should('be.visible');
  cy.get('#menu-item-11770 > a').click();
  cy.get('#menu-item-11769 > a').click();
  cy.get('#menu-item-12100 > :nth-child(1)').click();
  cy.get('#menu-item-18017 > a').click();
  cy.get('#menu-item-12100 > :nth-child(1)').click();
  cy.get('#menu-item-11773 > a').click();
  cy.get('#menu-item-11765 > a').click(); 

})
