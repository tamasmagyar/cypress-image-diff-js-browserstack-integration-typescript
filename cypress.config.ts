import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/dist/plugin';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      return config
    },
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/**/*.spec.cy.ts"
  },
});