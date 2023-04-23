

//const Page = require('./page');

class OTPPage{

    async waitForPage(){
        const elem = await chromeWeb.$('span=Security Code')
        await elem.waitUntil(async function () {
                    return (await this.getText()) === 'Security Code'
        }, {timeout: 60000,timeoutMsg: 'expected text to be different after 5s'})
    }

    async inputSecurityCode (OTPCodes) {
        var chars = OTPCodes.split('');

        await chromeWeb.$('input[data-testid="otp-input-0"]').setValue(chars[0]);
        await chromeWeb.$('input[data-testid="otp-input-1"]').setValue(chars[1]);
        await chromeWeb.$('input[data-testid="otp-input-2"]').setValue(chars[2]);
        await chromeWeb.$('input[data-testid="otp-input-3"]').setValue(chars[3]);
        await chromeWeb.$('input[data-testid="otp-input-4"]').setValue(chars[4]);
        await chromeWeb.$('input[data-testid="otp-input-5"]').setValue(chars[5]);

    }

}

module.exports = new OTPPage();
