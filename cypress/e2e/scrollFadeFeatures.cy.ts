describe('ScrollFadeFeatures Component Test', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('checks if feature items are rendered', () => {
    cy.window().scrollTo(0, 1000)
    cy.get('[data-cy="features-div"]').should('be.visible')
    cy.get('h4').should('be.visible')
  })
})
