
class MobileChatsPage {

    get textBoxSend(){
        return android.$('~chatDetail_input')
    }

    get btnSend(){
        return android.$('~chatDetail_sendMessage')
    }

    get textMessage(){
        return android.$('/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup');
    }

    get optionReply(){
        return android.$('//android.view.ViewGroup[@content-desc="reply"]');
    }

    get textBoxSendToRoom(){
        return android.$('~chatDetail_sendMessage')
    }

    async sendMessage (msg) {
        await this.textBoxSend.setValue(msg);
        await this.btnSend.click();

    }

    async activeReplyOption (msg) {
       android.setTimeout({'implicit':5000});
       var xpath = '(//android.view.ViewGroup[@content-desc="'+msg+'"])[1]/android.view.ViewGroup/android.view.ViewGroup'
        const el = await android.$(xpath);
        await android.touchAction({
             action: 'longPress',
             element: el
        });
         const reply = await android.$('~reply')
         await android.touchAction({
                 action: 'tap',
                 element: reply
          });

    }


    async replyMessage () {
         await this.optionReply.click();
         await this.textBoxSend.setValue('Reply message to AM2');
         await this.textBoxSendToRoom.click();
    }
}

module.exports = new MobileChatsPage();
