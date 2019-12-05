const master = require("../../wdio.conf");
const { join } = require('path');

exports.config = Object.assign(master.config, {
  baseUrl: 'https://www.google.com/',  
  specs: ["./examples/Image_Comparison/specs/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev : ["./examples/Image_Comparison/specs/**/googlesearch.test.js"],
  },
  reporters: ["spec"],
  maxInstances: 6,
  services: [ "browserstack", ['image-comparison',
      {
          baselineFolder: join(process.cwd(), './examples/Image_Comparison/baseline/'),
          formatImageName: '{tag}-{logName}-{width}x{height}',
          screenshotPath: join(process.cwd(), './examples/Image_Comparison/tmp'),
          savePerInstance: true, // this creates a folder per browser
          clearRuntimeFolder: true, // this deleted diff and actual folders every run
          autoSaveBaseline: true, // this creates a baseline if one doesn't exist
          blockOutStatusBar: true, // removes status bar from screenshot
          blockOutToolBar: true, // removes toolbar from screenshot
      }],
  ],
  browserstackLocal: false,  
  capabilities: [
    {
      "project": "Visual Regression Example: Chrome",
      "browserstack.debug": true,
      "browser": "chrome",
      "goog:chromeOptions": {
        "args": ["disable-infobars"]
      },
      'resolution' : '1920x1080',
      "os": "Windows",
      "os_version": "10",
      "browserstack.local": false,
      "browserstack.console": "errors",
      "browserstack.networkLogs": true
    },
    {
      "project": "Visual Regression Example: IE11",
      'os' : 'Windows',
      'os_version' : '8.1',
      'browserName' : 'IE',
      'browser_version' : '11.0',
      'browserstack.local' : 'false',
      'browserstack.selenium_version' : '3.5.2',
    }
  ],
  user: process.env.REMOTE_USER,
  key: process.env.REMOTE_PASSWORD,
});
