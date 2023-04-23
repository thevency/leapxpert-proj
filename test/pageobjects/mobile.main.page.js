
class MobileMainPage{

    get tabContact(){
        return android.$('[@content-desc="bottomTab_contact"]')
//        return $('//android.view.ViewGroup[@content-desc="bottomTab_contact"]/android.view.ViewGroup')
    }

    async clickOnAvatar() {
        await this.icon.click();
    }

}

module.exports = new MainPage();
