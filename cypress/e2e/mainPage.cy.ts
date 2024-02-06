describe('Main Page Tests', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('displays the full screen banners correctly', () => {
    cy.get('.App').within(() => {
      cy.contains('h1', 'Welcome').should('be.visible')
      cy.contains('h2', 'Thank You').should('exist')
    })
  })
})
