/// <reference types="Cypress" />


const Form_URL = '/#sign-in'
const Favourite_URL='/reputation'


describe('SearchAddFav', () => {
  before(() => {
    cy.visit(Form_URL)
    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
    cy.fixture('example').then(function(fdata)
    {
this.data=fdata
    })
    
  })


  //Login to check reputation page for favourite teams
  it('Add fav team from search',function(){
   
   cy.logininput(this.data.existinguseremail1,this.data.existu1correctpwd).then(()=>{
   cy.get('.MuiPaper-elevation4 > :nth-child(4) > .MuiTypography-root').click({force: true})
   cy.wait(4000)
//check if URL is as expected i.e has baseURL/reputation 
   cy.url().should('eq',Cypress.config().baseUrl + Favourite_URL )
   })
  
//check for page header

   cy.get('.css-10ib5jr > .MuiTypography-h2')
  .should('contain','Favourite Teams') 
   cy.get('.css-10ib5jr > .MuiTypography-h3')
  .should('contain','Receive notifications of your favourite team(s) activities')



cy.get('input[type="search"]').type('Manchester City')
cy.get('div[data-cy="team-list"]')
.find('.MuiCardContent-root')
.should('have.length',3)


cy.get('div[data-cy="team-list"]').find('.MuiPaper-root') //.MuiCard-root //.MuiPaper-root
.each(($e1, index, $list) => {
 const teamname=$e1.find('.MuiCardContent-root p').text()
 cy.log(teamname)
  if(teamname.includes('Manchester City'))
    {
    cy.log(teamname)
    cy.wrap($e1).find("button[aria-label='favorite']").click() //"button[aria-label='favorite']"
    }
   })


   cy.reload()

   cy.get('div[data-cy="fav-team-list"]').find('.MuiPaper-root').each(($e1, index, $list) => {
    
      const favteam=$e1.find('.MuiCardContent-root p').text()
      const fteam=$e1.find('.MuiCardContent-root > .MuiTypography-body1').text()
      cy.log(fteam)
      cy.log(favteam)
      if(favteam.includes('Manchester City')) 
     { 
        cy.log(favteam)
        expect(favteam).to.equal('Manchester City')
        
    }
  })
 /*  cy.get('[data-cy="fav-team-list"] > .MuiGrid-root > .MuiPaper-root').each((obj,index, $list) =>
   {
    const fteamname=obj.find('.MuiCardContent-root p').text()
    cy.log(fteamname)
  if(fteamname.includes('Manchester City'))
    {
    cy.log(fteamname)
    cy.wrap(obj).should('have.text','Manchester City') //"button[aria-label='favorite']"
    }

   }) */
 
  

})

})
