import GoogleHome from '../page_objects/GoogleHome.js'
import GoogleSearchResults from '../page_objects/GoogleSearchResults.js';

var scoreManager = require('../dashboard/scoreManager.js');

describe('google.com home page', () => {

  before(() => {
    
    browser.enablePerformanceAudits({networkThrottling: 'online', cpuThrottling: 0, cacheEnabled: true}) 

    scoreManager.purgeScores(true, false)

  })

  it('reached the homepage', () => {
      GoogleHome.open()
  })

  it('This test Passes', () => {
      expect(1).to.equal(1)
  })

  it('This test Fails', () => {
      expect(1).to.equal(0)
  })

  afterEach(function() {

      scoreManager.writePassFail(this.currentTest.state)
          
  });

  after(() => {

      scoreManager.writeScore(browser.getPerformanceScore())

  })

})

function consoleLog(argument){
  console.log(argument)
}
