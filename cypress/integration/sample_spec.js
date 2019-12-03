describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('has the correct title', () => {
    cy.title().should('equal', 'React App')
  })
  it('has a naviagtion', () => {
    cy.contains('Show more').click()
  })
  it('has a bookmark', () => {
    cy.get('[class^=Message]')
      .first()
      .find('[class^=Bookmark]')
      .click()
  })
})
