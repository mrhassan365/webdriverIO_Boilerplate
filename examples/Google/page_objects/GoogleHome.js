import Page from './Page'

class GoogleHome extends Page {

  get searchField()  { 
    return $('[title="Search"]')
  }

  get googleSearchButton()  { 
    return $('[value="Google Search"]')
  }

  open(path) {
    if (!path) {
      super.open('https://www.google.com/')
    } else {
      super.open(path)
    }
  }

}

export default new GoogleHome()
