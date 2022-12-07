// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('checkalllinks',() => {
cy.get('a').each(link => {

    if (link.prop('href'))
    cy.request({
    url: link.prop('href'),
     failOnStatusCode: false
    
 })
 cy.log( link.prop('href'))
})
})
//login by entering credentials
Cypress.Commands.add('logininput', (username,password) => {
 cy.get("input[name='email']").type(username)
 cy.get("input[name='password']").type(password)
 cy.get('button[type="submit"]').click()
//cy.url().should('contain', '/login-successful')
})

Cypress.Commands.add('checkfavteams', (teamtoadd) => {
cy.get('div[data-cy="fav-team-list"]').find('.MuiPaper-root p').each(($e1, index, $list) => {
const favteam=$e1.find('.MuiCardContent-root p').text()
if(favteam.includes(teamtoadd))
{  
return false
} 
else return true

 })

 


})
  


//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })