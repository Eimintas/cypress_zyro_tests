/// <reference types="cypress" />

module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
      if (browser.name = '') {
        launchOptions.preferences.fullscreen = true
        return launchOptions
      }
    })
  }
  describe('Publish Test', function() {
    it('Log In', function() {
      cy.visit('https://zyro.com')
      cy.wait(1000)
      cy.get('.auth-links > .link').click()
      cy.wait(1000)
      cy.get('#email').type('john.snow@mailinator.com')
      cy.wait(1000)
      cy.get('#password').type('qwerty123')
      cy.wait(1000)
      cy.get('.actions > .button').click()
      cy.wait(10000)
    })
    it('Open website builder', function() {
      cy.get(':nth-child(1) > .sites__thumbnail > .sites__overlay').contains('Edit website').wait(1000).click()
      cy.wait(5000)
      cy.get('.publish-button').wait(1000).click()
      cy.wait(1000)
      // Start - Random site name generation and entering
      const uuid = () => Cypress._.random(0, 1e6)
      const id = uuid()
      const testname = `testname${id}`
      cy.get('#domain').type('testname')
      // End -
      cy.get('.modal__footer > .zyro-button').click()
      cy.wait(5000)
      cy.get('.published-modal__title')
      cy.wait(1000)
    })
   })
