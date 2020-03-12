describe('The Search Feature', () => {

  const sampleId = 'S1000'

  beforeEach(() => {
    cy.visit('/')
  })

  it('accepts input', () => {
    cy.get('[data-cy=search]')
      .click()
      .get('[data-cy=search-input]')
      .type(sampleId)
      .should('have.value', sampleId)
  })

  it('Redirects to a shipment details page', () => {
    cy.get('[data-cy=search]')
      .click()
      .get('[data-cy=search-input]')
      .type(sampleId)
      .get('[data-cy=initiate-search]')
      .click()
      .get('[data-cy=details-page]')
      .should('exist')
  })

  it('Redirects to the respective shipment details page', () => {
    cy.get('[data-cy=search]')
      .click()
      .get('[data-cy=search-input]')
      .type(sampleId)
      .get('[data-cy=initiate-search]')
      .click()
      .get('[data-cy=details-page]')
      .should('contain', sampleId)
  })
})
