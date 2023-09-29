const axios = require('axios')
const jsdom = require('jsdom')

const { JSDOM } = jsdom

const removeTags = (s) => {
    const index = s.lastIndexOf('>')
    return s.substring(index+1)
}

const scrapeProblem = async (url) => {
    try {
        const res = await axios.get(url)
        const dom = new JSDOM(res.data)
        const problem = {
            title: removeTags(dom.window.document.querySelector('.title').textContent),
            timeLimitPerTest: removeTags(dom.window.document.querySelector('.time-limit').innerHTML),
            memoryLimitPerTest: removeTags(dom.window.document.querySelector('.memory-limit').innerHTML),
            inputFile: removeTags(dom.window.document.querySelector('.input-file').innerHTML),
            outputFile: removeTags(dom.window.document.querySelector('.output-file').innerHTML),
            statement: dom.window.document.querySelector('.problem-statement>:nth-child(2)').innerHTML,
            inputTestCases: '',
            ouputTestCases: '',
            Note: dom.window.document.querySelector('.note>').innerHTML,
        }
        console.log(problem);
        return problem
    } catch(error) {
        console.log(error);
    }
}

const uploadProblem = async ( browser, url ) => {

}

module.exports = {
    scrapeProblem
}