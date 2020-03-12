describe('The Details Page', () => {

  const mobileWidth = 700
  const mobileHeight = 1400

  beforeEach(() => {
    cy.visit('/')
  })

  it('Desktop: takes user to Details Page when clicking Info', () => {
    cy.get('[data-cy=info]:first')
      .invoke('attr', 'id')
      .then(shipmentId => {
        cy.get('[data-cy=info]:first')
          .click()
          .get('[data-cy=details-page]')
          .should('contain', shipmentId)
      })
  })

  it('Mobile: takes user to Details Page when clicking Info', () => {
    cy.viewport(mobileWidth, mobileHeight)
      .get('[data-cy=info]:first')
      .invoke('attr', 'id')
      .then(shipmentId => {
        cy.get('[data-cy=info]:first')
          .click({force:true})
          .get('[data-cy=details-page]')
          .should('contain', shipmentId)
      })
  })

  it('Desktop: takes the user from Details Page back to Shipments Page', () => {
    cy.get('[data-cy=info]:first')
      .click()
      .get('[data-cy=close]')
      .click()
      .get('[data-cy=shipments-page]')
      .should('exist')
  })

  it('Mobile: takes the user from Details Page back to Shipments Page', () => {
    cy.viewport(mobileWidth, mobileHeight)
      .get('[data-cy=info]:first')
      .click({force:true})
      .get('[data-cy=close]')
      .click()
      .get('[data-cy=shipments-page]')
      .should('exist')
  })

})
