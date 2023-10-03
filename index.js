const express = require('express')
const app = express()
const { login } = require('./src/codeforcesScraper')

const scraper = require('./src/scraper')

app.get('/', async (req, res) => {
    /*
    const url = 'https://codeforces.com/problemset/problem/1870/D';
    const problem = await scraper.scrapeProblem(url);
    res.json(problem)
    */
   await login()

})


app.listen(3000, () => {
    console.log('server is running')
})

/*






*/