
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage {
    
    /**
     * define selectors using getter methods
     */

    get reduceProductCount() {
        return $('//*[@content-desc="counter minus button"]');
    }

    get increaseProductCount() {
        return $('//*[@content-desc="counter plus button"]');
    }

    get addToCartButton() {
        return $('~Add To Cart button');
    }

    get cartBadge() {
        return $('//*[@content-desc="cart badge"]')
    }

    get proceedToCheckoutButton() {
        return $('~Proceed To Checkout button')
    }

}

module.exports = new CartPage();
