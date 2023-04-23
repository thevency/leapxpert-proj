
class MobileChatsPage {

    get textBoxSend(){
        return chromeWeb.$('~chatDetail_input')
    }

    get btnSend(){
        return chromeWeb.$('~chatDetail_sendMessage')
    }

    get textMessage(){
        return chromeWeb.$('/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup');
    }

    get optionReply(){
        return chromeWeb.$('//android.view.ViewGroup[@content-desc="reply"]');
    }

    get textBoxSendToRoom(){
        return chromeWeb.$('~chatDetail_sendMessage')
    }

    get optionUser01(){
        return chromeWeb.$('span=Auto 100 User 100')
    }



    async sendMessage () {
        await this.textBoxSend.setValue('Send message to AM2');
        await this.btnSend.click();

    }

    async shouldSeeMessage (msg) {
        var xpath = '//*[@data-testid="reply-forward-message"]//span[@data-testid="message-item-body"]/span[text()="'+msg+'"]'
        var elem = await chromeWeb.$(xpath);
        await expect(elem).toBeDisplayed()


    }



    async clickOnUser () {
        await this.optionUser01.click();
    }
}

module.exports = new MobileChatsPage();
