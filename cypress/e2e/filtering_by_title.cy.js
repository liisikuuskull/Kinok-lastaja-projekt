describe('Filtering movies by title.', () => {
    it('Searches for a movie by title.', () => {
      cy.visit('http://127.0.0.1:5500/kino/src/main/resources/static/frontpage.html');
      cy.contains('Films').click();
      cy.url().should('include', 'films.html');
  
      
      cy.get('#search-input').type('One Life');
  
      
      cy.get('input[value="title"]').check();
  
      
      cy.get('#search-btn').click();
  
      
      cy.get('.showtimes-table tbody tr.highlight').should('contain', 'One Life');
    });
  });
  