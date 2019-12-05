import Home from '../page_objects/Home.js'
import SearchResults from '../page_objects/SearchResults.js'

describe('Search : Find some books', () => {

    it('reaches the homepage', () => {
      Home.open()
    })

    it('searches for "qa testing" and submits', () => {
      Home.searchBar.click()
      Home.searchBar.keys('qa testing')
      Home.submitSearch.click()
    })

    it('Shows a positive number of results', () => {
      const results = SearchResults.resultsCount.getText()
      const integers = results.split(" ").filter(function(int) {
        return int.match(/\d+/g)
      })
      const cleanInteger = integers[1].replace(/,/g, "")
      expect(parseInt(cleanInteger)).to.be.above(0)
    })

})
