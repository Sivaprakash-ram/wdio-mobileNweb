const expect = require('chai').expect;
const report = require('@wdio/allure-reporter');

const timeoutValue = 5000;

 class BasePage {

   /**
   * Check if an element is displayed and if not wait until it's displayed and click
   * {Web and Mobile}
   * @param {selector} selector
   * @param {elementName} elementName
   */
    async waitAndClick(selector, elementName)
    {
        await selector.waitForDisplayed ({timeout : timeoutValue}) ; // Explicit wait
        if (selector.isDisplayed()) {
            await selector.click();
            report.addStep(elementName + ' : is displayed and clicked')
        } else {
            report.addStep(elementName + ' : is not displayed and un-able to click')
        }   
    }

   /**
   * Check if an element is clickable, if not wait until its clickable and click
   * {Web Only}
   * @param {selector} selector
   * @param {elementName} elementName
   */
    async waitUntilClick(selector, elementName)
    {
        await selector.waitForClickable ({timeout : timeoutValue}) ; // Explicit wait
        if (selector.isClickable()) {
            await selector.click();
            report.addStep(elementName + ' : is displayed & clickable and click action performed')
        } else {
            report.addStep(elementName + ' : is not displayed and un-able to click')
        }    
    }

   /**
   * Check if an element is displayed or not in the UI
   * {Web and Mobile}
   * @param {selector} selector
   * @param {elementName} elementName
   */
    async isDisplayed(selector, elementName)
    {
        await selector.waitForDisplayed ({timeout : timeoutValue}) ; // Explicit wait
        if (selector.isDisplayed()) {
            report.addStep(elementName + ' : is displayed')
        } else {
               report.addStep(elementName + ' : is not displayed')
        }       
    } 

   /**
   * Check if actual text is equal to expected text
   * {Web and Mobile}
   * @param {selector} selector
   * @param {expectedResult} expectedResult
   */
    async verifyElementText(selector, expectedResult) 
    {
        const element= await (selector);
        const attributeValue = await element.getText();
        let isTextEqual = expect(attributeValue).to.equal(expectedResult);
        if(isTextEqual) { 
        report.addStep('Actual Text: ' + attributeValue + ' matches with expected: ' + expectedResult)
        } else {
        report.addStep('Actual Text: ' + attributeValue + ' does not match with expected: ' + expectedResult)
        }
    }

   /**
   * Check if some actual text is present within the expected text
   * {Web and Mobile}
   * @param {selector} selector
   * @param {expectedResult} expectedResult
   */
    async verifyElementContainsText(selector, expectedResult) 
    {
        const element= await (selector);
        const attributeValue = await element.getText();
        let isTextContains = expect(attributeValue).contains(expectedResult);
        if(isTextContains) { 
        report.addStep('Actual Text: ' + attributeValue + ' is present within expected: ' + expectedResult)
        } else {
        report.addStep('Actual Text: ' + attributeValue + ' is not present within expected: ' + expectedResult)
        }
    }

   /**
   * Check if some actual text is present within the expected text
   * {Web and Mobile}
   * @param {selector} selector
   * @param {textValue} textValue
   */
    async enterText(selector, textValue) 
    {
        if (selector.isEnabled()) {
        await selector.setValue(textValue);
        report.addStep(textValue + ' : is entered in Text Field')
        } else {
        report.addStep(textValue + ' : is not entered in Text Field')    
        }

    }

}

module.exports = new BasePage(); 