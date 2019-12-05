import GoogleHome from '../page_objects/GoogleHome.js'

describe('google.com home page', () => {

  it('reached the homepage and maximized window', () => {
    GoogleHome.open()
    browser.maximizeWindow()
  })

  it('compares image to baseline', () => {

    expect(browser.checkScreen('original', {})).to.equal(0)

  })

})
