describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://192.168.178.32:3000')
  })
  it('user can login', () => {
    cy.get('input[name=username]')
      .type('pvs')
      .first()
      .get('input[name=password]')
      .type('123')
      .get('button[type=submit]')
      .click()
  })
  it('has the correct title', () => {
    cy.title().should('equal', 'Langenfelder Damm 46')
  })
  it('has a naviagtion', () => {
    cy.contains('Show more').click()
  })
  /* it('has a bookmark', () => {
    cy.get('[class^=Message]').first().find('[class^=Bookmark]').click()
  }) */
})
