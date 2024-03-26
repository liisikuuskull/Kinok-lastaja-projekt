describe('Filtering movies by genre.', () => {
    it('Searches for a movie by genre.', () => {
      cy.visit('http://127.0.0.1:5500/kino/src/main/resources/static/frontpage.html');
      cy.contains('Films').click();
      cy.url().should('include', 'films.html');
  
      
      cy.get('#search-input').type('Comedy');
  
      
      cy.get('input[value="genre"]').check();
  
      
      cy.get('#search-btn').click();
  
      
      cy.get('.showtimes-table tbody tr.highlight').should('contain', 'Me, Myself & Irine');
      cy.get('.showtimes-table tbody tr.highlight').should('contain', 'Holiday');
    });
  });
  