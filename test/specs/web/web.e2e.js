const Page = require('../../pageobjects/page'); 

describe('My Web Tests', () => {

    it('should not be able to login with in-valid credentials', async () => {
       
        await Page.open('contact')
        browser.pause(5000) 
    
   })

})   