import Page from './Page'

class GoogleSearchResults extends Page {

  get results() {
    return $('div.resultStats')
  }

  get didNotMatchAnyDocuments() {
    return $('= - did not match any documents.') != undefined
  }

  open(path) {
    super.open(path);
  }

}

export default new GoogleSearchResults()
