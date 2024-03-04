/// <reference types="Cypress" />
describe('My second suite', () => {
  it('my second test case ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //checkbox test
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])
    //static Dropdown test 
    cy.get('select').select('option2').should('have.value','option2')
    //Dynamic Dropdown
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
    if($el.text()==="India")
    {
      $el.click()
    }
  })
    cy.get('#autocomplete').should('have.value', 'India')
    //visible and invisible element
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
    //radiobutton
    cy.get('[value="radio1"]').check()
  })
})