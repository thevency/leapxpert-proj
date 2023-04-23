

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactPage extends Page {

    get tabTeam(){
        return $('span=Team')
    }

    get boxSearch(){
        return $('input[data-testid="search-contact"]')
    }


    async clickOnTeam () {
        await this.tabTeam.click();
    }

     async searchUserName (userName) {
        await this.boxSearch.click();
        await this.boxSearch.setValue(userName);
    }

}

module.exports = new ContactPage();
