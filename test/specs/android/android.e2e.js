const MenuHomePage = require('../../pageobjects/menuhome.page');
const ProductsPage = require('../../pageobjects/products.page');
const CartPage = require('../../pageobjects/cart.page');
const CheckoutPaymentPage = require('../../pageobjects/checkoutAndpayment.page');
const logindata = require('../../data/logindata');
const BasePage = require('../../pageobjects/base.page');

describe('My Android Tests', () => {

    beforeEach(() => {
        driver.launchApp()
    })
       
    afterEach(() => {
        driver.closeApp()
    })

    it('should not be able to login with in-valid credentials', async () => {
        
        await BasePage.waitAndClick(await MenuHomePage.menuName('open menu'), 'Hamburger Menu')
        await BasePage.waitAndClick(await MenuHomePage.menuName('menu item log in'), 'Log in Menu')
        await BasePage.enterText(await MenuHomePage.inputUsername, logindata.invalidUser)
        await BasePage.enterText(await MenuHomePage.inputPassword, logindata.invalidPass)
        await BasePage.waitAndClick(await MenuHomePage.loginButton, 'Login Button')
        await BasePage.isDisplayed(await MenuHomePage.loginErrorMessage, 'Login error message')
        await BasePage.verifyElementText(await MenuHomePage.loginErrorMessage, 'Sorry, This user is Locked out.')
    
   })
    
    it.skip('should login with valid credentials', async () => {
        
        await BasePage.waitAndClick(await MenuHomePage.menuName('open menu'), 'Hamburger menu')
        await BasePage.waitAndClick(await MenuHomePage.menuName('menu item log in'), 'Log in menu')
        await BasePage.enterText(await MenuHomePage.inputUsername, logindata.validUser)
        await BasePage.enterText(await MenuHomePage.inputPassword, logindata.validPass)
        await BasePage.waitAndClick(await MenuHomePage.loginButton, 'Login button')
       
    })

    it('should see products page and select a product and then add to cart then checkout order', async () => {

        // verify product screen title
        await BasePage.verifyElementText(await ProductsPage.headerText, 'Products')
        
        // loop through products and select required product
        await ProductsPage.selectProduct('Sauce Labs Bolt T-Shirt')

        //reduce product count to zero and try to add to cart
        await BasePage.waitAndClick(await CartPage.reduceProductCount, 'Reduce count')
        let isEnabled = await CartPage.addToCartButton.isEnabled()
        console.log("Is Cart Button enabled? : " + isEnabled)

        //increase product count >1 and add product to cart
        await BasePage.waitAndClick(await CartPage.increaseProductCount, 'Increase count')
        isEnabled = await CartPage.addToCartButton.isEnabled()
        console.log("Is Cart Button enabled? : " + isEnabled)
        await BasePage.waitAndClick(await CartPage.addToCartButton, 'Add to Cart button')

        //navigate to cart screen and proceed to checkout screen
        await BasePage.waitAndClick(await CartPage.cartBadge, 'Cart Badge button')
        await BasePage.waitAndClick(await CartPage.proceedToCheckoutButton, 'Proceed to Checkout button')
        await MenuHomePage.login(logindata.validUser , logindata.validPass)

        //enter checkout and payment details and confirm order
        await CheckoutPaymentPage.enterValidCheckoutDetails()
        await BasePage.waitAndClick(await CheckoutPaymentPage.paymentButton, 'Proceed to Payment button')

        //enter payment card details and confirm order
        await CheckoutPaymentPage.enterPaymentCardDetails()
        await BasePage.waitAndClick(await CheckoutPaymentPage.reviewOrderButton, 'Review Order button')
        await BasePage.waitAndClick(await CheckoutPaymentPage.placeOrderButton, 'Place Order button')
        await browser.pause(5000)
    })

    it('should see products page and select a product and then add to cart then checkout order', async () => {

        // verify product screen title
        await BasePage.verifyElementText(await ProductsPage.headerText, 'Products')
        
        // loop through products and select required product
        await ProductsPage.selectProduct('Sauce Labs Fleece Jacket')

        //reduce product count to zero and try to add to cart
        await BasePage.waitAndClick(await CartPage.reduceProductCount, 'Reduce count')
        let isEnabled = await CartPage.addToCartButton.isEnabled()
        console.log("Is Cart Button enabled? : " + isEnabled)

        //increase product count >1 and add product to cart
        await BasePage.waitAndClick(await CartPage.increaseProductCount, 'Increase count')
        isEnabled = await CartPage.addToCartButton.isEnabled()
        console.log("Is Cart Button enabled? : " + isEnabled)
        await BasePage.waitAndClick(await CartPage.addToCartButton, 'Add to Cart button')

        //navigate to cart screen and proceed to checkout screen
        await BasePage.waitAndClick(await CartPage.cartBadge, 'Cart Badge button')
        await BasePage.waitAndClick(await CartPage.proceedToCheckoutButton, 'Proceed to Checkout button')
        await MenuHomePage.login(logindata.validUser , logindata.validPass)

        //enter checkout and payment details and confirm order
        await CheckoutPaymentPage.enterValidCheckoutDetails()
        await BasePage.waitAndClick(await CheckoutPaymentPage.paymentButton, 'Proceed to Payment button')

        //enter payment card details and confirm order
        await CheckoutPaymentPage.enterPaymentCardDetails()
        await BasePage.waitAndClick(await CheckoutPaymentPage.reviewOrderButton, 'Review Order button')
        await BasePage.waitAndClick(await CheckoutPaymentPage.placeOrderButton, 'Place Order button')
        await browser.pause(5000)
    })
 
})


