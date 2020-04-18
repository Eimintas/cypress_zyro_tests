/// <reference types="cypress" />

module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
      if (browser.name = '') {
        launchOptions.preferences.fullscreen = true
        return launchOptions
      }
    })
  }
  describe('Sanity', function() {
    it('Log In', function() {
       cy.viewport(1440, 788)
       cy.visit('https://zyro.com/')
       cy.get('.auth-links > a.button').click()
       cy.wait(1000)
       // Start - Random user name generation and entering
       const uuid = () => Cypress._.random(0, 1e6)
       const id = uuid()
       const testname = `testname${id}`
       cy.get('input').type(testname)
       cy.get('#email').type(testname + '@email.com')
       // End -
       cy.wait(1000)
       cy.get('.actions > .button').click()
       cy.wait(1000)
       cy.get('#password').type('448267')
       cy.wait(1000)
       cy.get('#name').type('John')
       cy.wait(1000)
       cy.get('.actions > .button').click()
       cy.wait(1000)
       cy.get('.welcome').should('be.visible') 
    })
   })
