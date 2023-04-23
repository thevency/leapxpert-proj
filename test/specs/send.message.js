const LoginPage = require('../pageobjects/login.page')
const LogoutPage = require('../pageobjects/logout.page')
const OTPPage = require('../pageobjects/otp.page')
const MainPage = require('../pageobjects/main.page')
const ProfilePage = require('../pageobjects/main.profile.page')
const ChatsPage = require('../pageobjects/main.chats.page')
const MobileContactPage = require('../pageobjects/mobile.main.contact.page')
const MobileLoginPage = require('../pageobjects/mobile.login.page')
const MobileOTPPage = require('../pageobjects/mobile.otp.page')
const MobileChatsPage = require('../pageobjects/mobile.main.chats.page')

const testData = {
    "companyName":"auto",
    "otp":'111111',
    "msg": "Send msg to User 02",
    "user01":{
        "name": "Auto 100 User 100",
        "username" : "automation_auto_100",
        "password":"Leaptesting@123"
    },
    "user02":{
        "username":"automation_auto_101",
        "password":"Leaptesting@123"
    }
}

var activationCode;
var msgCode;
var msg;

describe('Message Sending Test', () => {

    it('User 01 should login the Web Application with valid credentials and get activation code', async () => {

        await LoginPage.open()
        await LoginPage.login(testData.companyName,testData.user01.username, testData.user01.password)
        await OTPPage.waitForPage()
        await OTPPage.inputSecurityCode(testData.otp)

        await MainPage.clickOnAvatar()
        await ProfilePage.clickOnDevices()
        await ProfilePage.clickOnLinkDevice()
        await ProfilePage.waitForActivationCode()
        activationCode = await ProfilePage.getActivateCode()
        console.log(`activeCode:${activationCode}`)
        await ProfilePage.clickOnClose()


    });

    it('User 01 should login successfully to Mobile Application', async () => {
        console.log(`activeCode:${activationCode}`)
        await MobileLoginPage.navigateToSecurityCodePage()
        await MobileLoginPage.clickOnActivationTab()
        await MobileOTPPage.inputActivationCode(activationCode)

        await MobileLoginPage.waitForPageReady()
        await MobileLoginPage.enterPassword(testData.user01.password)
        await MobileLoginPage.clickOnSignIn()

        await MobileOTPPage.inputSecurityCode6digits(testData.otp)
    });

    it('User 01 should able to find User 02 in Contact and able to access chat window', async () => {
        await MobileContactPage.waitForChatsTab()
        await MobileContactPage.waitForSearchTab()
        await MobileContactPage.clickOnContactTab()
        await MobileContactPage.waitFotContactTab()

        await MobileContactPage.activeForTeamTab(testData.user02.username)
        await MobileContactPage.searchUserName(testData.user02.username)
        await MobileContactPage.clickOnChats()

    });

    it('User 01 should send message and reply message to User 02 ', async () => {
            msgCode = Date.now()
            msg = testData.msg + ' ' +msgCode
            console.log(`msg: ${msg}`)
            await MobileChatsPage.sendMessage(msg)
            await MobileChatsPage.activeReplyOption(msg)
            await MobileChatsPage.replyMessage()

    });

    it('User 01 should able to log out Web Application', async () => {
            chromeWeb.setTimeout({'implicit':10000})
            await MainPage.clickOnAvatar()
            await LogoutPage.logout()
    });
});

describe('User 02', () => {
    it('log in Web app and should receive the message sent from User 01', async () => {
        console.log(`msgCode: ${msg}`)
        await LoginPage.login(testData.companyName,testData.user02.username, testData.user02.password)
        await OTPPage.inputSecurityCode(testData.otp)
        await ChatsPage.clickOnUser(testData.user01.name)
        await ChatsPage.shouldSeeMessage(msg)
    });
});


