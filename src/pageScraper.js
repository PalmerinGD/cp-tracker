const scraperObject = {
    url: 'http://codeforces.com/problemset/problem/1202/B',
    async scraper(browser) {
        let page = await browser.newPage()
        console.log(`Navigation to ${this.url}`);
        await page.goto(this.url)
        await page.waitForSelector('.problem-statement')
        let problem = await page.evaluate(() => {
            let mainDiv = document.querySelector('.problem-statement')
            return {
                title: mainDiv.querySelector('.title').innerHTML,
                timeLimit: mainDiv.querySelector('.time-limit').innerHTML,
                memoryLimit: mainDiv.querySelector('.memory-limit').innerHTML,
                inputFile: mainDiv.querySelector('.input-file').innerHTML,
                outputFile: mainDiv.querySelector('.output-file').innerHTML,
                statement: document.querySelector('.problem-statement>:nth-child(2)').outerHTML,
                inputSpecification: mainDiv.querySelector('.input-specification>p').outerHTML,
                outputSpecification: mainDiv.querySelector('.output-specification>p').outerHTML,
                sampleTests: {
                    input: mainDiv.querySelector('.input>pre').innerHTML,
                    output: mainDiv.querySelector('.output>pre').innerHTML.split()
                },
                note: mainDiv.querySelector('.note')
            }
        })
        return problem
    }
}

module.exports = scraperObject