const report = require('@wdio/allure-reporter');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductsPage {
    
    /**
     * define selectors using getter methods
     */

    get headerText() {
        return $('//*[@content-desc="container header"]/android.widget.TextView');
    }

    get productList() {
        return $$('//android.widget.TextView[@content-desc="store item text"]');
    }

    async selectProduct(productName) {
        
        let totalElements = await this.productList.map((result) => {
            return result.getText();    
        
        })
        
        console.log(totalElements)

        for (let i = 1; i <= totalElements.length; i++) {
            if (totalElements[i] === productName) {
                const itemText = totalElements[i]
                i = i + 1 
                await $('(//android.widget.TextView[@content-desc="store item text"])['+ i + ']').click()
                report.addStep(itemText + ' : is displayed and clicked' )
            } 
        }
    }

}

module.exports = new ProductsPage();
