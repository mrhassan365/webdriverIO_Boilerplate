require("dotenv").config();

exports.config = {  
  services: ["firefox-profile", "chromedriver"],
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      }
    }
  ],
  updateJob: false,
  specs: [],
  exclude: [],
  suites: {},
  logLevel: "silent",
  coloredLogs: true,
  screenshotPath: "./error/screenshots",
  waitforTimeout: 30000,
  deprecationWarnings: false,
  plugins: {
    "wdio-screenshot": {}
  },
  framework: "mocha",
  reporters: ["dot"],
  mochaOpts: {
    ui: "bdd",
    compilers: ['js:@babel/register'],
    timeout: 60 * 1000
  },

  // Hooks
  // See https://webdriver.io/docs/configurationfile.html for more info.

  // Gets executed once before all workers get launched.
  onPrepare: function (config, capabilities) {},

  // Gets executed before test execution begins. At this point you can access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before: function (capabilities, specs) {
    const chai = require("chai");
    global.expect = chai.expect;
  },

  // Gets executed after all tests are done. You still have access to all global variables from
  // the test.
  after: function (result, capabilities, specs) {},

  // Gets executed after all workers got shut down and the process is about to exit.
  onComplete: function(exitCode, config, capabilities, results) {},
};
