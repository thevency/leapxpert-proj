
class MobileContactPage{

    get tabTeam(){
        return android.$('~Team')
    }

    get boxSearch(){
        return android.$('//android.widget.EditText[@content-desc="contact_search"]')
    }
    get optionUserNameSearch(){
        return android.$('//android.view.ViewGroup[@content-desc="name"]/android.widget.TextView');
    }

    get textViewFoundUser(){
        return android.$('//android.view.ViewGroup[@content-desc="teams_0_0"]');
    }

    get btnChats(){
        return android.$('~profile_chat')
    }

    async waitForChatsTab(){
        const elem = await android.$('~Chats')
        await elem.waitUntil(async function () {
            return (await this.getText()) === 'Chats'
        }, {timeout: 60000,timeoutMsg: 'expected text to be different after 5s'})
    }
    async waitForSearchTab(){
        const elem = await android.$('~bottomTab_search')
        await elem.waitUntil(async function () {
            return (await this.isExisting())
        }, {timeout: 60000,timeoutMsg: 'expected text to be different after 60s'})
    }

    async clickOnContactTab(){
        android.setTimeout({'implicit':10000})
        const contactTab = await android.$('~bottomTab_contact')
//        await contactTab.waitForDisplayed({ timeout: 90000 })
        await android.touchAction({
             action: 'tap',
             element: contactTab
        });

    }
    async waitFotContactTab(){
       const contactText = await android.$('~Contacts')
       await contactText.waitUntil(async function () {
            return (await this.getText()) === 'Contacts'
       }, {timeout: 60000,timeoutMsg: 'expected text to be different after 5s'})
    }

    async waitForOption(){
       const contactText = await android.$('//android.view.ViewGroup[@content-desc="name"]/android.widget.TextView')
       await contactText.waitUntil(async function () {
            return (await this.getText()).includes('Username matches')
       }, {timeout: 60000,timeoutMsg: 'expected text to be different after 5s'})
    }

    async activeForTeamTab (userName) {
        await this.boxSearch.setValue(userName);
        await this.boxSearch.click()
//        browser.keys("\uE007");
        const ele = await android.$('//android.view.ViewGroup[@content-desc="name"]/android.widget.TextView')
        await ele.waitForDisplayed({timeout:10000})

        const contactText = await android.$('//android.view.ViewGroup[@content-desc="name"]/android.widget.TextView')
        await contactText.waitUntil(async function () {
              return (await this.getText()).includes('Username matches')
        }, {timeout: 60000,timeoutMsg: 'expected text to be different after 5s'})

        await this.optionUserNameSearch.click();

        await this.tabTeam.click();
    }
    async searchUserName(userName) {
        await this.boxSearch.setValue(userName);
        await this.boxSearch.click()
//        browser.keys("\uE007");
        const ele = await android.$('//android.view.ViewGroup[@content-desc="name"]/android.widget.TextView')
        await ele.waitForDisplayed({timeout:10000})
        const contactText = await android.$('//android.view.ViewGroup[@content-desc="name"]/android.widget.TextView')
        await contactText.waitUntil(async function () {
              return (await this.getText()).includes('Username matches')
        }, {timeout: 60000,timeoutMsg: 'expected text to be different after 5s'})
        await this.optionUserNameSearch.click();

        const userLoading = await android.$('//android.view.ViewGroup[@content-desc="teams_0_0"]')
        await userLoading.waitForDisplayed({timeout:10000})

        await this.textViewFoundUser.click();
        await this.btnChats.click();
    }

     async clickOnChats () {
       await this.btnChats.click();
     }


}

module.exports = new MobileContactPage();
