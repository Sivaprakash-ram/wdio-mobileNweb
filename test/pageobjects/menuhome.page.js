
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MenuHomePage {
    
    /**
     * define selectors using getter methods
     */

    async menuName(nameOfMenu) {
        return $('//*[@content-desc="'+(nameOfMenu)+'"]')
        
        // If using Accessibility ID
        //  return $('~'+(nameOfMenu));
    }

    get inputUsername() {
        return $('~Username input field');
    }

    get inputPassword() {
        return $('~Password input field');
    }

    get loginButton() {
        return $('~Login button');
    }

    get loginErrorMessage() {
        return $('//*[@content-desc="generic-error-message"]/android.widget.TextView')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new MenuHomePage();
