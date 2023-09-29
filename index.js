const express = require('express')
const app = express()

const scraper = require('./src/scraper')

app.get('/', (req, res) => {
    const url = 'https://codeforces.com/problemset/problem/1872/F';
    scraper.scrapeProblem(url);

})
app.listen(3000, () => {
    console.log('server is running')
})