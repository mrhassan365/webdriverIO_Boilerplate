const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  baseUrl: 'https://www.horned.se',  
  specs: ["./tutorial/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev : ["./tutorial/Integration/tutorial/tutorial.test.js"],
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
