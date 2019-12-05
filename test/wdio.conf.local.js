const master = require("../wdio.conf");

exports.config = Object.assign(master.config, {
  baseUrl: 'https://www.hugeinc.com/',  
  specs: ["./test/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev : ["./test/Integration/GlobalNav/nav-expander.test.js"],
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
