/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to initialize AOS with settings
     * todo: type for when AOS is converted to TypeScript
     */
    initAOS(settings?: Record<string, any>): Chainable

    /**
     * Custom command to dispatch an event
     * @param eventName The name of the event to dispatch
     * @param times The number of times to dispatch the event. Default is 1
     */
    dispatchEvent(eventName: string, times?: number): Chainable
  }
}

Cypress.Commands.add('initAOS', settings => {
  cy.window().then((window) => {
    (window as any).AOS.init(settings);
  });
});

Cypress.Commands.add('dispatchEvent', (eventName, times = 1) => {
  cy.window().then(window => {
    const event = new Event(eventName);
    for (let i = 0; i < times; i++) {
      window.document.dispatchEvent(event);
    }
  });
});
