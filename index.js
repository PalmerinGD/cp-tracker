const browser = require('./src/browser')
const scaperController = require('./src/pageController');

let browserInstance = browser.startBrowser()

const express = require('express')
const app = express()

app.get('/', async(req, res) => {
    res.json(await scaperController(browserInstance))
})

app.listen(3000, () => {
    console.log('server is running')
})