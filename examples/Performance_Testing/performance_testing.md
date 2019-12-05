# Performance Testing

This is a readme for how to get set up with Performance Testing as well as a minimal reporting dashboard.
This guide assumes a similar folder structure to the example, if you get errors bases on that files can't be found, for example data.json, then please make sure the filepaths have been updated according to your implementation

## Setup Performance Testing
* Config (i.e **wdio.conf.local.js**)
	* add the devtools service into your services array (you might have to add the whole array like this: ```services: ["chromedriver", "devtools"],```
* Spec (ie ***.test.js**)
	* Enable performance testing in the ```Before``` function
	* ```  before(() => {browser.enablePerformanceAudits({networkThrottling: 'online', cpuThrottling: 0, cacheEnabled: true})})```
	* You can do some fun stuff with throttling in this function: https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-devtools-service#enableperformanceaudits
	* Get Metrics with any method: https://webdriver.io/docs/devtools-service.html

## Setup Performance Recording
* Spec (ie ***.test.js**)
    * Include scoreManager.js at the top of your script: ```var scoreManager = require('../dashboard/scoreManager.js');```
    * Add the purgeScore() function to your ```before()``` callback to make sure your test data doesn't build indefinetely
    * ```scoreManager.purgeScores(true, false)``` 
    * the first boolean tells the function if you want to purge test pass / fail values
    * the second boolean tells the function if you want to purge Performance Scores (by default the scoreManager never keeps more than 30 scores)
 * Add the writePassFail() function inside your ```afterEach()``` callback
  	* ```afterEach(function() {scoreManager.writePassFail(this.currentTest.state)});```
  	* ```this.currentTest.state``` contains a simple string "pass" or "fail" depending on if the test passed or failed
 * Add the writeScore() function to your ```after()``` callback
  	* ```after(() => {scoreManager.writeScore(browser.getPerformanceScore())})```
  	* ```browser.getPerformanceScore()``` contains a float with the performance score (0 = awful, 1 = best)
  	* The score is multiplied by 100 to better reflect the score as Google Lighthouse presents it, a number between 0 and 100

## Setup Performance Dashboard
* The dashboard is a simple front-end webapp that pulls the data from ```data.json``` and renders it in two graphs
* The easiest way to serve the webapp is to navigate to the folder containing ```index.html``` in a macOS terminal and executing this command ```python -m SimpleHTTPServer 8000```
* Then open your browser and visit http://0.0.0.0:8000/index.html
* If you want to show your dashboard to others, or just access it on your phone, look into ngrok: https://ngrok.com/

## Disclaimers
* This iteration of performance Testing only works on Chrome
* Performance testing doesn't play well with running at the same time as your functional tests, best practice is to add a separate test suite for the performance tests