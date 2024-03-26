describe('Will the StarCinema page open.', () => {
  it('Visits the home page', () => {
    cy.visit('http://127.0.0.1:5500/kino/src/main/resources/static/frontpage.html') 
    cy.get('h1').should('contain', 'Now Playing')
  })
})
