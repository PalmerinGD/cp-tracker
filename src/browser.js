const puppeter = require('puppeteer')

const startBrowser = async() => {
    let browser;
    try {
        console.log('Opening the browser');
        browser = await puppeter.launch({
            headless: true,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        })
    } catch(err) {
        console.log('could not create a browser: ', err);
    }
    return browser
}

module.exports = {
    startBrowser
}