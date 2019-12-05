const master = require("../../wdio.conf");
const { join } = require('path');

exports.config = Object.assign(master.config, {
  runner: 'local',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  baseUrl: 'https://www.google.com/',  
  specs: ["./examples/Image_Comparison/specs/**/*.test.js"],
  logLevel: 'error',
  suites: {
    dev : ["./examples/Image_Comparison/specs/**/googlesearch.test.js"],
  },
  reporters: ["spec"],
  maxInstances: 10,
  services: [["image-comparison",
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
    "selenium-standalone"
  ],
  capabilities: [
    {
      "browserName": "chrome",
      "goog:chromeOptions": {
        "args": [ "--disable-infobars", "--headless", "--disable-gpu", "--window-size=1920x1080"]
      }
    },
  ],
});
