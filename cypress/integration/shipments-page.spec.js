import { SHIPMENTS_PER_PAGE } from '../../src/components/constants'

describe('The Shipments Page', () => {

  const mobileWidth = 700
  const mobileHeight = 1400

  beforeEach(() => {
    cy.visit('/')
  })

  it('desktop: confirms that the max number of shipments per page is not exceeded', () => {
    cy.get('[data-cy=shipment]')
      .its('length')
      .should('be.lte', SHIPMENTS_PER_PAGE)
  })

  it('mobile: confirms that the max number of shipments per page is not exceeded', () => {
    cy.viewport(mobileWidth, mobileHeight)
    .get('[data-cy=shipment-mobile]')
    .its('length')
    .should('be.lte', SHIPMENTS_PER_PAGE)
  })

  it('desktop: confirms that on pressing the Next button the user is taken to a Shipments Page', () => {
    cy.wait(5000)
    .get('[data-cy=next-page]')
    .click()
    .get('[data-cy=shipments-page]')
    .should('exist')
  })

  it('desktop: confirms that the max number of shipments on successive pages is not exceeded', () => {
    cy.wait(5000)
    .get('[data-cy=next-page]')
    .click()
    .get('[data-cy=shipment]')
    .its('length')
    .should('be.lte', SHIPMENTS_PER_PAGE)
  })

  it('mobile: confirms that on pressing the Next button the user is taken to a Shipments Page', () => {
    cy.viewport(mobileWidth, mobileHeight)
    .wait(5000)
    .get('[data-cy=next-page]')
    .click()
    .get('[data-cy=shipments-page]')
    .should('exist')
  })

  it('mobile: confirms that the max number of shipments on successive pages is not exceeded', () => {
    cy.viewport(mobileWidth, mobileHeight)
    .wait(5000)
    .get('[data-cy=next-page]')
    .click()
    .get('[data-cy=shipment]')
    .its('length')
    .should('be.lte', SHIPMENTS_PER_PAGE)
  })

})
