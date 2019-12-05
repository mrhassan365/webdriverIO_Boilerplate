const master = require("../../wdio.conf");

exports.config = Object.assign(master.config, {
  services: [],
  hostname: 'hub',
  port: 4444,
  baseUrl: 'https://www.google.com/',
  specs: ["./examples/Google/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev : ["./examples/Google/specs/googlesearch.test.js"],
  },
  reporters: ["spec"],
  maxInstances: 10,
  capabilities: [
    {
      "browserName": "chrome",
      // "browserVersion": "73.0.3683.86",
      "goog:chromeOptions": {
        "args": [ "--disable-infobars", "--headless", "--disable-gpu" ],
      }
    },
    {
      "browserName": "firefox",
      // "browserVersion": "66.0.1",
      "moz:firefoxOptions": {
        "args": [ "-headless" ],
      }
    },
  ],
});
