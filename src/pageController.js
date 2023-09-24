const pageScraper = require('./pageScraper')
const scrapeAll = async(browserInstance) => {
    let browser;
    try {
        browser = await browserInstance
        const res = await pageScraper.scraper(browser)
        return res
    } catch(err) {
        console.log('could not resolve the browser instance: ', err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)