import GoogleHome from '../page_objects/GoogleHome.js'
import GoogleSearchResults from '../page_objects/GoogleSearchResults.js';

describe('google.com home page', () => {

  it('reached the homepage', () => {
    GoogleHome.open()
  })

  it('searched for stuff', () => {
    GoogleHome.searchField.click()
    GoogleHome.searchField.keys('stuff')
    GoogleHome.googleSearchButton.click()
  })

  it('got valid results', () => {
    expect(GoogleSearchResults.results).to.be.an('object');
  })

  it('searched for nonsense', () => {
    GoogleHome.open()
    GoogleHome.searchField.click()
    GoogleHome.searchField.keys('lskufdahgiaeuhgoiuq34ty9oehrfivoabfdilvqg274tqoeuribvoaeuifg8q34orgbvuaoeibg8oq3wreybv\n')
  })

  it('did not get any results', () => {
    expect(GoogleSearchResults.didNotMatchAnyDocuments).to.be.true;
  })

})
