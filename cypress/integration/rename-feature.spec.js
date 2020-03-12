import { SHIPMENTS_PER_PAGE } from '../../src/components/constants'

describe('The Rename Feature', () => {


  const newName = 'This is the new name'
  const mobileWidth = 700
  const mobileHeight = 1400

  beforeEach(() => {
    cy.visit('/')
  })

  it('Desktop: takes user to Details Page, user starts typing when clicking Info, and aborts. Renamer should be closed', () => {
    cy.get('[data-cy=info]:first')
      .click()
      .get('[data-cy=rename-button]')
      .click()
      .get('[data-cy=renamer-input]')
      .type('This is the wrong name')
      .get('[data-cy=renamer-close]')
      .click()
      .get('[data-cy=renamer-input]')
      .should('not.exist')
  })

  it('Desktop: takes user to Details Page, user starts typing when clicking Info, and commits. Renamer should be closed', () => {
    cy.get('[data-cy=info]:first')
      .click()
      .get('[data-cy=rename-button]')
      .click()
      .get('[data-cy=renamer-input]')
      .type('This is the right name')
      .get('[data-cy=renamer-ok]')
      .click()
      .get('[data-cy=renamer-input]')
      .should('not.exist')
  })

  it('Desktop: takes user to Details Page, user starts typing when clicking Info, and commits. Page should be displaying the new name', () => {
    cy.get('[data-cy=info]:first')
      .click()
      .get('[data-cy=rename-button]')
      .click()
      .get('[data-cy=renamer-input]')
      .type(newName)
      .get('[data-cy=renamer-ok]')
      .click()
      .get('[data-cy=rename-button]')
      .invoke('attr', 'value')
      .should('equal', newName)
  })

  it('Mobile: takes user to Details Page, user starts typing when clicking Info, and aborts. Renamer should be closed', () => {
    cy.viewport(mobileWidth, mobileHeight)
      .get('[data-cy=info]:first')
      .click({force:true})
      .get('[data-cy=rename-button]')
      .click()
      .get('[data-cy=renamer-input]')
      .type('This is the wrong name')
      .get('[data-cy=renamer-close]')
      .click()
      .get('[data-cy=renamer-input]')
      .should('not.exist')
  })

  it('Mobile: takes user to Details Page, user starts typing when clicking Info, and commits. Renamer should be closed', () => {
    cy.viewport(mobileWidth, mobileHeight)
      .get('[data-cy=info]:first')
      .click({force:true})
      .get('[data-cy=rename-button]')
      .click()
      .get('[data-cy=renamer-input]')
      .type('This is the right name')
      .get('[data-cy=renamer-ok]')
      .click()
      .get('[data-cy=renamer-input]')
      .should('not.exist')
  })

  it('Mobile: takes user to Details Page, user starts typing when clicking Info, and commits. Page should be displaying the new name', () => {
    cy.viewport(mobileWidth, mobileHeight)
      .get('[data-cy=info]:first')
      .click({force:true})
      .get('[data-cy=rename-button]')
      .click()
      .get('[data-cy=renamer-input]')
      .type(newName)
      .get('[data-cy=renamer-ok]')
      .click()
      .get('[data-cy=rename-button]')
      .invoke('attr', 'value')
      .should('equal', newName)
  })

})
