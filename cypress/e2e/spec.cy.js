/// <reference types="Cypress" />
describe('My first suite', () => {
  it('my first test case ', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
  })
})