import Page from './Page'

class Cart extends Page {

    get cartSize() {
        return $('[class="a-row sc-cart-header"]')
    }

    open(path) {
        super.open(path);
    }

}

export default new Cart()
