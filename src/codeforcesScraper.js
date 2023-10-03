const axios = require('axios')
const jsdom = require('jsdom')

const { JSDOM } = jsdom

const removeTags = (s) => {
    const index = s.lastIndexOf('>')
    return s.substring(index+1)
}

const checkNull = (s) => {
    if(s === null) return null
    return s.innerHTML
}


const scrapeProblem = async (url) => {
    try {
        const res = await axios.get(url)
        const dom = new JSDOM(res.data)
        const document = dom.window.document;

        const problem = {
            title: removeTags(document.querySelector('.title').textContent),
            timeLimitPerTest: removeTags(document.querySelector('.time-limit').innerHTML),
            memoryLimitPerTest: removeTags(document.querySelector('.memory-limit').innerHTML),
            inputFile: removeTags(document.querySelector('.input-file').innerHTML),
            outputFile: removeTags(document.querySelector('.output-file').innerHTML),
            statement: document.querySelector('.problem-statement>:nth-child(2)').innerHTML,
            inputTestCases: document.querySelector('.input').innerHTML,
            ouputTestCases: document.querySelector('.output').innerHTML,
            Note: checkNull(document.querySelector('.note')),
        }
        return problem
    } catch(error) {
        console.log(error);
    }
}

const login = async (  ) => {
    const res = await axios.get('https://codeforces.com/enter?back=%2f')
    const dom = new JSDOM(res.data)
    const document = dom.window.document;

    const csrf_token = document.querySelector('meta[name="X-Csrf-Token"]').content
    const ftaa = document.querySelector('input[name="ftaa"]').content
    console.log(dom.window.find('input[name="ftaa"]'));
    //console.log(csrf_token);
    /*
    const url = 'https://codeforces.com/problemset/problem/1879/A'
    const res = axios.post('https://codeforces.com/enter?back=%2f', {
        csrf_token: '',
        action: 'enter',
        ftaa: '',
        bfaa: '',
        handleOrEmail: 'Aldo_Arcos11',
        password: 'Gragragra11',
        _tta: ''
    }, 
    {headers: {'content-type': 'application/x-www-form-urlencoded'}}
    )
    console.log(res);
    */
}

module.exports = {
    scrapeProblem,
    login
    
}