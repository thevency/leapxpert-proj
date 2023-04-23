

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */


    get inputCompanyName() {
        return chromeWeb.$('input[data-testid="company-input"]')
    }

    get btnNext () {
        return chromeWeb.$('span=Next')
    }


    get inputUsername () {
        return chromeWeb.$('input[data-testid="usernameLogin"]')
    }

    get inputPassword () {
     return chromeWeb.$('input[data-testid="passwordLogin"]')
    }

    get btnLogin () {
        return chromeWeb.$('span=Log in');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async login (companyname,username, password) {
        await this.inputCompanyName.setValue(companyname);
        await this.btnNext.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }


}

module.exports = new LoginPage();
