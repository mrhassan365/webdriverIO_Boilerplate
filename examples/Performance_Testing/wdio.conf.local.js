const master = require("../../wdio.conf");

exports.config = Object.assign(master.config, {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  services: ["chromedriver", "devtools"],
  baseUrl: 'https://www.google.com/',  
  specs: ["./examples/Performance_Testing/specs/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev : ["./examples/Performance_Testing/specs/**/googlesearch.test.js"],
  },
  reporters: ["spec"],
  maxInstances: 1,
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": ["--headless"]
      }
    },
  ],
});
