import { defineConfig } from "cypress";
import preprocessor from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

const addCucumberPreprocessorPlugin = preprocessor.addCucumberPreprocessorPlugin;

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});
