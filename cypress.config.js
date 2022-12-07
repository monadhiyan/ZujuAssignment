const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

// Populate process.env with values from .env file
//require('dotenv').config()
// AWS exports
//const awsConfig = require('./aws-exports-es5.js')

/*module.exports = defineConfig({
  env: {
    cognito_username: process.env.AWS_COGNITO_USERNAME,
    cognito_password: process.env.AWS_COGNITO_PASSWORD,
    awsConfig: awsConfig.default
  }
}) */
module.exports = defineConfig({
  projectId: 'mjxbvj',
  e2e: {
setupNodeEvents(on, config) {
    on('file:preprocessor', cucumber())
      //setupNodeEvents(on, config) {
       // return require('./cypress/plugins/index.js')(on, config)
            // implement node event listeners here
    },
    baseUrl: 'https://beta-app.zujudigital.com',

    //specPattern: 'cypress/integration/**/*.feature'
    specPattern:'cypress/integration/examples/ZujuSpecs/*.js',
    //specPattern:'cypress/integration/examples/*.js',
    
    //specPattern:'cypress/integration/examples/BDD/*.feature'

    //all js test or spec file will be linked to cypress
  },
});

/*e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://beta-app.zujudigital.com', */
