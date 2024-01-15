/// <reference types="Cypress" />
describe('My first suite', () => {
  it('my first test case ', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.get('.product:visible').should('have.length',4)
    cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()
  })
})