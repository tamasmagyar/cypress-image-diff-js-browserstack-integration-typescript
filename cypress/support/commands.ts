import compareSnapshotCommand from 'cypress-image-diff-js/dist/command';
import { RecurseDefaults } from 'cypress-recurse';

declare global {
  namespace Cypress {
    interface Chainable {
      compareSnapshot(
        name: string,
        testThreshold?: number,
        retryOptions?: Partial<typeof RecurseDefaults>,
      ): Chainable<Element>;
      slowVisit(url: string): Chainable<Element>;
    }
  }
}
compareSnapshotCommand();

Cypress.Commands.add('slowVisit', (url) => {
    cy.visit(url)
    cy.wait(1000)
  })