// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
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


Cypress.on('uncaught:exception', (err, runnable) => {
  // we expect a 3rd party library error with message 'list not defined'
  // and don't want to fail the test so we return false
  return false
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})


beforeEach(function () {
  window.logCalls = 1
})
Cypress.Commands.overwrite('log', (originalFn, message) => {
  Cypress.log({
    displayName: `******* TEST : ${window.logCalls}. ${message} ******* `,
    name: `--- ${window.logCalls}. ${message}---`,
    message: ''
  })
  window.logCalls++
})
