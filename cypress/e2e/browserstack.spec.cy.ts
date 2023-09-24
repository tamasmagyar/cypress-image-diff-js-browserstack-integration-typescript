describe('template spec', () => {
  it('passes', () => {
    cy.visit('../../report-example.html')
    cy.contains('Data Hub home page search bar - chrome').should('be.visible')
    cy.compareSnapshot(`${Cypress.env('BROWSER')}-example`)
  })
})