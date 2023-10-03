const codeforces = require('./codeforcesScraper');
const scrapeProblem = async(url) => {
    const domain = url.replaceAll(/.+\/\/|www.|\..+/g, '')
    console.log(domain);
    let problem; 
    switch(domain) {
        case "codeforces": {
            problem = codeforces.scrapeProblem(url)
            break;
        }
        case 'atcoder': {
            break;
        }
        case 'spoj': {
            break;
        }
    }
    return problem
}

module.exports = {
    scrapeProblem,
}