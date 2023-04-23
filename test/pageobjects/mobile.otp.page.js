
class MobileOTPPage {

    get btcClose(){
        return $('//android.view.ViewGroup[@content-desc="cancel-send-voice"]')
    }

    async inputActivationCode (OTPCodes) {
        var chars = OTPCodes.split('');
        console.log(`OTPCodes:${OTPCodes}`)
        await android.$('~activation_0').setValue(chars[0]);
        await android.$('~activation_1').setValue(chars[1]);
        await android.$('~activation_2').setValue(chars[2]);
        await android.$('~activation_3').setValue(chars[3]);
        await android.$('~activation_4').setValue(chars[4]);
        await android.$('~activation_5').setValue(chars[5]);
        await android.$('~activation_6').setValue(chars[6]);
        await android.$('~activation_7').setValue(chars[7]);
        await android.$('~activation_8').setValue(chars[8]);
        await android.$('~activation_9').setValue(chars[9]);

    }

    async inputSecurityCode6digits (OTPCodes) {
        var chars = OTPCodes.split('');
        await android.$('~otp_0').setValue(chars[0]);
        await android.$('~otp_1').setValue(chars[1]);
        await android.$('~otp_2').setValue(chars[2]);
        await android.$('~otp_3').setValue(chars[3]);
        await android.$('~otp_4').setValue(chars[4]);
        await android.$('~otp_5').setValue(chars[5]);

    }


}

module.exports = new MobileOTPPage();
