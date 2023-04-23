

class MobileLoginPage{

    get textSkipWelcome() {
        return android.$('//android.widget.TextView[@content-desc="Skip"]')
    }
    get tabActivationCode() {
        return android.$('//android.view.ViewGroup[@content-desc="tab_activationCode"]')
    }

    get textBoxPassword () {
        return android.$('~login_password')
    }

    get btnLogin () {
        return android.$('~login_signIn')
    }

    async clickOnSignIn () {
        await this.btnLogin.click()
    }

    async navigateToSecurityCodePage () {
       let elem = await android.$('~Welcome')
       let isDisplayed = await elem.isDisplayed()
       console.log(`isDisplayed: ${isDisplayed}`)
        if(isDisplayed === true){
             await this.textSkipWelcome.click()
        }
    }

    async clickOnActivationTab(){
        await this.tabActivationCode.click()
    }

    async waitForPageReady(){
        await android.$('~Sign In').waitUntil(async function () {
             return (await this.getText() === 'Sign In')
        }, {
             timeout: 30000,
             timeoutMsg: 'expected text to be different after 60s'
        });
    }
    async enterPassword (userPassword) {
       await this.textBoxPassword.setValue(userPassword);
    }
}

module.exports = new MobileLoginPage();
