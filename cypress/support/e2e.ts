import './commands';


after(() => {
  cy.task('generateReport')
})