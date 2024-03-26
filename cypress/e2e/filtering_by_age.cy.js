describe('Filtering movies by age.', () => {
    it('When age is entered as a number, it shows the result.', () => {
      cy.visit('http://127.0.0.1:5500/kino/src/main/resources/static/frontpage.html') 
      cy.contains('Films').click();
      cy.url().should('include', 'films.html');

      cy.get('#search-input').type('14');

      cy.get('input[value="age"]').check();

      cy.get('#search-btn').click();
      
      cy.get('.showtimes-table tbody tr.highlight').should('contain', 'The Nun');
    cy.get('.showtimes-table tbody tr.highlight').should('contain', 'Kill Bill: Vol 1');

    })
  })
  