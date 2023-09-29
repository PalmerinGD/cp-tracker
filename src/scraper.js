const codeforces = require('./codeforcesScraper');

// This functions takes two paremeters the browserInstance and the url of the problem.
const scrapeProblem = async(url) => {
    await codeforces.scrapeProblem(url)
}

module.exports = {
    scrapeProblem,
}