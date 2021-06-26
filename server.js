const http = require('http');
const { readFileSync } = require('fs')


const homePage = readFileSync('./front-app/index.html')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Working correct=)')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)

});

server.listen(5000);