
module.exports = class Page {

    open (path) {
        return chromeWeb.url(`https://web.qa.leapxpert.app/`)
    }

}
