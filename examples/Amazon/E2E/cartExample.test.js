import Home from '../page_objects/Home.js'
import Cart from '../page_objects/Cart.js'

describe('Shopping Cart : New Session, no login', () => {

    it('reaches the homepage', () => {
      Home.open()
    })

    it('clicks the shopping cart', () => {
      Home.shoppingCart.click()
    })

    it('has an empty shopping cart', () => {
      expect(Cart.cartSize.getText()).to.equal('Your Shopping Cart is empty.')
    })

})
