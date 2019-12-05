import GoogleHome from '../page_objects/GoogleHome.js'

describe('google.com smaller element comparison', () => {

  it('reaches the homepage', () => {
    GoogleHome.open()
  })

  it('compares image to baseline', () => {
    expect(browser.checkElement($('#tsf'), "searchBar", {})).to.equal(0)
  })

})
