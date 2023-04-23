
class ProfilePage {

    get btnDevice(){
        return chromeWeb.$('[data-testid="btn-devices"]')
    }
    get btnLinkDevice(){
        return chromeWeb.$('button=Link Device')
    }

    get btnActiveCode(){
        return chromeWeb.$('button=Link Device')
    }
    get btnClose(){
        return chromeWeb.$('//div/span[.="Link Device"]/following-sibling::*')
    }

    async clickOnDevices() {
        await this.btnDevice.click();
    }

    async clickOnLinkDevice() {
        await this.btnLinkDevice.click();
    }

    async waitForActivationCode(){
        const elem = await chromeWeb.$('//div/div[text()="Activation code:"]')
        await elem.waitUntil(async function () {
             return (await this.getText() === 'Activation code:')
        }, {timeout: 60000,timeoutMsg: 'expected text to be different after 60s'})
    }

    async getActivateCode() {
        const codePath = await chromeWeb.$('//div/div[.="Activation code:"]/following-sibling::div/div')
        const code = await codePath.getText()
        return code
    }

    async clickOnClose(){
        await this.btnClose.click();
    }
}

module.exports = new ProfilePage();
