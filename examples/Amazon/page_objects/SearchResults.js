import Page from './Page'

class SearchResults extends Page {

    get resultsCount()  { 
        return $('div.sg-col-inner')
    }

    open(path) {
        super.open(path);
    }

}

export default new SearchResults()
