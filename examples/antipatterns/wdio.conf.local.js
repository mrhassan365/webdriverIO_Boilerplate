const master = require("../../wdio.conf");

exports.config = Object.assign(master.config, {
  baseUrl: 'https://localhost/',  
  specs: ["./examples/antipatterns/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev : [
      "./examples/antipatterns/specs/basic.test.js",
      "./examples/antipatterns/specs/exampledotcom.test.js",
    ],
  },
  reporters: ["spec"],
  maxInstances: 10,
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": [ "--disable-infobars", "--headless", "--disable-gpu" ]
      }
    },
  ],
});
