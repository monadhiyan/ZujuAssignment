/// <reference types="Cypress" />

const Form_URL = '/#sign-in'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)
    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
    cy.fixture('example').then(function(fdata)
    {
this.data=fdata
    })
     
    
  })

  //Simple success case of entering a valid existing zuju user creds and login successful
  it('Sign in by input of creds for existing user',function(){
   
   cy.logininput(this.data.existinguseremail,this.data.existucorrectpwd)
   cy.wait(3000)
   cy.get('h2[data-cy="page-heading"]').should('have.text','Upcoming for you')
   cy.get('.MuiButtonBase-root').should('not.have.text','Join Us')
   cy.get('[data-cy="settings-btn"]').should('be.visible').click()

})
})
