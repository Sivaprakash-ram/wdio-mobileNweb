
const checkoutdata = require('../data/checkoutAndpayment');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPayment {
    
    /**
     * define selectors using getter methods
     */

    get fullName() {
        return $('~Full Name* input field');
    }

    get address1() {
        return $('~Address Line 1* input field');
    }

    get address2() {
        return $('~Address Line 2 input field');
    }

    get city() {
        return $('~City* input field')
    }

    get state() {
        return $('~State/Region input field')
    }

    get zip() {
        return $('~Zip Code* input field')
    }

    get country() {
        return $('~Country* input field')
    }

    get cardNumber() {
        return $('~Card Number* input field')
    }

    get cardExpiryDate() {
        return $('~Expiration Date* input field')
    }

    get cardSecurityCode() {
        return $('~Security Code* input field')
    }

    async enterValidCheckoutDetails() {
        await this.fullName.setValue(checkoutdata.fullName)
        await this.address1.setValue(checkoutdata.address1)
        await this.address2.setValue(checkoutdata.address2)
        await this.city.setValue(checkoutdata.city)
        await this.state.setValue(checkoutdata.state)
        await this.zip.setValue(checkoutdata.zip)
        await this.country.setValue(checkoutdata.country)
    }

    get paymentButton() {
        return $('~To Payment button')
    }

    async enterPaymentCardDetails() {
        await this.fullName.setValue(checkoutdata.fullName)
        await this.cardNumber.setValue(checkoutdata.cardNumber)
        await this.cardExpiryDate.setValue(checkoutdata.cardExpiry)
        await this.cardSecurityCode.setValue(checkoutdata.cardSecurity)
    }

    get reviewOrderButton() {
        return $('~Review Order button')
    }

    get placeOrderButton() {
        return $('~Place Order button')
    }

}

module.exports = new CheckoutPayment();
