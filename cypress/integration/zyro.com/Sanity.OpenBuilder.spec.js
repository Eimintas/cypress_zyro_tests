/// <reference types="cypress" />

module.exports = (on, config) => {
    on('before:browser:launch', (browser = {}, launchOptions) => {
      if (browser.name = '') {
        launchOptions.preferences.fullscreen = true
        return launchOptions
      }
    })
  }
  describe('OpenBuilder Test', function() {
    it('Open website builder', function() {
      cy.visit('https://zyro.com')
      cy.wait(1000)
      cy.get('.grid-item-full > .button').click()
      cy.wait(1000)
      cy.visit('https://zyro.com/templates')
      cy.wait(1000)
      cy.get('.template__btn-build').last().wait(1000).click()
      cy.wait(1000)
      cy.url().should('eq', 'https://editor.zyro.com/')
    })
   })
