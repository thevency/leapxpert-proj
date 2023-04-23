

class MainPage{

    get tabContact(){
        return chromeWeb.$('class=NavSideItem_content__icon__KS50j')
    }

    get icon(){
        return chromeWeb.$('[data-testid="avatar-string"]')
    }

    async clickOnAvatar() {
        await this.icon.click();
    }


}

module.exports = new MainPage();
