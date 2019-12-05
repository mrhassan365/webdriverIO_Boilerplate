const master = require("../../wdio.conf");

exports.config = Object.assign(master.config, {
  path: '/',
  port: 9515,
  baseUrl: 'https://www.amazon.com/',  
  specs: ["./examples/Amazon/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev : ["./examples/Amazon/E2E/searchExample.test.js"],
  },
  reporters: ["spec"],
  maxInstances: 10,
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      }
    }
  ],
});
