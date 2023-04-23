
class LogoutPage{

    get optionLogout () {
        return chromeWeb.$('span=Log out')
    }

    get icon(){
        return chromeWeb.$('(//button//*[@data-testid="avatar-string"])[1]')
    }

    get btnLogOut(){
        return chromeWeb.$("//*[@data-testid='btn-right'][.='Log out']")
    }

    async logout () {

        await this.icon.click();
        await this.optionLogout.click();
        await this.btnLogOut.click();

    }

}

module.exports = new LogoutPage();
