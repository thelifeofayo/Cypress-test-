/// <reference types="Cypress" />
describe('My first suite', () => {
  it('my first test case ', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type('ca')
    cy.get('.product:visible').should('have.length',4)
    cy.get('.products').as('productlocator')
    cy.get('@productlocator').find('.product').eq(0).contains('ADD TO CART').click()
    cy.get('@productlocator').find('.product').each(($el, index, $list) => {
      const textveg=$el.find('h4.product-name').text()
      if(textveg.includes('Cashews'))
      {
        cy.wrap($el).find('button').click()
        
      }
    })
    //this is to return her expectation  for a text 
    cy.get('.brand').should('have.text', 'GREENKART')

    //this is to print logs 
    cy.get('.brand').then(function(logoelement)
    {
      cy.log(logoelement.text())
    })
  })
})