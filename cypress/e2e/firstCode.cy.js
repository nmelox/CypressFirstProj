describe('My First test', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })  
  it('Visits the Kitchen sink', () => {
	cy.contains('type').click()
  //assert Click Type Link
  cy.url().should('include', '/commands/actions')
  
  cy.get('.action-email').as('email')
  /*cy.get('@email').type('Fake@Email.com')
  cy.get('@email').should('have.value', 'Fake@Email.com')
  */

  cy.getByData('@email').type('Fake@Email.com')
  
  })
})