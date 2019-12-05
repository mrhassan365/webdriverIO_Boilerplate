import Page from './Page'

class Home extends Page {

    get navbar()  { 
        return $('#navbar')
    }
    get searchBar()  { 
        return $('#twotabsearchtextbox')
    }
    get submitSearch()  { 
        return $('input.nav-input')
    }
    get shoppingCart()  { 
        return $('#nav-cart')
    }

    open(path) {
        super.open(path);
    }

}

export default new Home()
