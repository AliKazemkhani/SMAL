describe('ScrollFadeText Component Test', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('changes opacity on scroll', () => {
    cy.get('h3').should('exist')
    cy.get('h3').should('have.css', 'opacity', '0')
    cy.window().scrollTo('center')
    cy.get('h3').should('exist')
    cy.get('h3').should('have.css', 'opacity', '1')
  })
})
