const master = require("../../wdio.conf");

exports.config = Object.assign(master.config, {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  baseUrl: 'https://www.google.com/',  
  specs: ["./examples/Google/specs/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev : ["./examples/Google/specs/**/googlesearch.test.js"],
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
