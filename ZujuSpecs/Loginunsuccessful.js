/// <reference types="Cypress" />

const Form_URL = '/#sign-in'
const forgotpwd_URL='/#forgot-password'

describe('un-successful login by input', () => {
  before(() => {
    cy.visit(Form_URL)
    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
    cy.fixture('example').then(function(fdata)
    {
this.data=fdata
    })
     
    
  })
  it('un-successful login by input for existing user',function(){

   //Test case:Sign in unsuccessful with appropriate message when password incorrect

   cy.logininput(this.data.existinguseremail,this.data.incorrectpassword)
   cy.get('.css-7fp3j8 > .MuiBox-root > .MuiTypography-root')
   .should('have.text','The email or password you entered is incorrect. Please try again.') 


   //Test case:Testing forgot password functionality by entering an existing user email
   cy.get('.css-pjhbz7 > .MuiTypography-root').click() 

   //Assert correct URL/page
   cy.url()
     .should('eq',Cypress.config().baseUrl +forgotpwd_URL)

   cy.wait(2000)
   cy.get('.MuiInputBase-input').type(this.data.existinguseremail)
   cy.get('button[type=submit]').click()
   cy.get('.MuiBox-root > .MuiTypography-subtitle1')
      .should('have.text','A password reset link will be sent to your email address if it is registered on our platform')
   /*cy.request("POST","https://cognito-idp.ap-southeast-1.amazonaws.com/",
   '{ClientId: "1t39e4ssl2ddno96kc710nip8p", Username: "Zujuexistingu@gmail.com",…}')
    .then((response)=>
    {
     //expect(response.status).to.eq(200)
     //failOnStatusCode :fail
     expect(response.body.DeliveryMedium).to.eq('EMAIL')
     cy.log('API response successful')
     
    })
*/

   
})
})