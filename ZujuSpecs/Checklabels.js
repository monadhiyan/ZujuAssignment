/// <reference types="Cypress" />
const Form_URL = '/#sign-in'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)

    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
    //custom command to check links on page/check for broken links if any
    cy.checkalllinks();  
    
  })
  it('Check All Labels', () => {

    cy.get('.MuiTypography-h2')
      .should('contain', 'Welcome to ZUJU KICKOFF')
    cy.get("label[for='ZGP-Text-Field']").eq(0)
       .should('have.text','Email Address')
    cy.get("label[for='ZGP-Text-Field']").eq(1)
      .should('have.text','Password')
    cy.get('.css-pjhbz7 > .MuiTypography-root')
      .should('contain','Forgot password?')
    cy.get('button[type="submit"]') //Log In
      .should('contain','Log In')
    cy.get('button[id="\:r1\:"]') 
      .should('contain','Continue with Google')
    cy.get('button[id="\:r2\:"]') 
      .should('contain','Continue with Facebook')
    cy.get('button[id="\:r3\:"]') 
      .should('contain','Continue with Apple')
    cy.get('.css-xlzwuu')
    .should('contain','Do not have an account?')
    cy.get('.css-xlzwuu > .MuiTypography-root')
     .should('contain','Create one')

    cy.get("input[name='email']")
    .should('have.attr','placeholder','Enter your email address')
    cy.get("input[name='password']")
    .should('have.attr','placeholder','Enter your password')

    
})
})