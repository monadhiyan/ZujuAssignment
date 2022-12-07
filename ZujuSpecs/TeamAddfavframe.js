/// <reference types="Cypress" />

//prerequisite ,This spec only handles team that is not already a favorite

const Form_URL = '/#sign-in'
const Favourite_URL='/reputation'

describe('Add favourites and delete from dash board', () => {
  before(() => {
    cy.visit(Form_URL)
    cy.url().should('eq', Cypress.config().baseUrl + Form_URL)
    cy.fixture('example').then(function(fdata)
    {
this.data=fdata
    })
     
    
  })

  //Login to check reputation page for favourite teams
  it('Login to check favourite teams',function(){
   
   cy.logininput(this.data.existinguseremail,this.data.existucorrectpwd).then(()=>{
   cy.get('.MuiPaper-elevation4 > :nth-child(4) > .MuiTypography-root').click({force: true})
   //check if URL is as expected i.e has baseURL/reputation 
   cy.url().should('eq',Cypress.config().baseUrl + Favourite_URL )
  })
   cy.wait(4000)
  
   cy.get('div[data-cy="team-list"]').find('.MuiCardContent-root').contains('HN 2').click('center',{force:true})
   cy.get("button[id='\:r5\:']").click()
   cy.get('svg[data-testid="ArrowForwardIosIcon"]').click()

   cy.reload()

   cy.get('div[data-cy="fav-team-list"]').find('.MuiPaper-root').each(($e1, index, $list) => {
    
      const favteam=$e1.find('.MuiCardContent-root p').text()
      const fteam=$e1.find('.MuiCardContent-root > .MuiTypography-body1').text()
      cy.log(fteam)
      cy.log(favteam)
      if(favteam.includes('HN 2')) 
     { 
        cy.log(favteam)
        expect(favteam).to.equal('HN 2')
        
    }
        
    
      
    })
    
    


   cy.get('input[type="search"]').type('HCM')
   cy.wait(3000)
   cy.get('div[data-cy="team-list"]').find('.MuiPaper-root') //.MuiCard-root //.MuiPaper-root
    .each(($e1, index, $list) => {
   const team=$e1.find('.MuiCardContent-root p').text()
    cy.log(team)
  if(team.includes('HCM'))
    {
    cy.log(team)
    cy.wrap($e1).find('.MuiCardContent-root').click('center',{force:true}) 
    cy.get('button[id="\:r1\:"]').contains('Favourite').click()
    cy.wait(3000)
    cy.get('.css-4ma54i > .MuiIconButton-root').click()
    }
   }) 
  
   cy.reload()
  



})
})

