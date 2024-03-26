describe('Can I choose 1 seat?', () => {
    it('Visits the home page', () => {
      cy.visit('http://127.0.0.1:5500/kino/src/main/resources/static/frontpage.html') 
      cy.contains('Show Times').click();

      cy.contains('Buy Ticket').click();
      cy.url().should('include', 'hall1plan.html');

      cy.get('#seat-count').clear().type('1');

      cy.get('#seat-count').should('have.value', '1');

      cy.contains('#chair-plan td', 'R3S10').then(($seat) => {
        if ($seat.hasClass('occupied')) {
            cy.get('#refresh-btn').click(); // Klõpsa nupul "Refresh Selection"
        } else {
            $seat.click(); 

        cy.get('#confirm-btn').click();

        cy.contains('You have confirmed your selection! ')
        }
    });

       



    
    })
  })