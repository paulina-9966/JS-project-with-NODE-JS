const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./index.html')
const homeStyles = readFileSync('./public/styles.css')
const homeLogo = readFileSync('./public/catus.png')
const homeImage = readFileSync('./public/hero-bcg.jpeg')
const homeLogic = readFileSync('./public/app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // image/logo
  else if (url === '/catus.png') {
    res.writeHead(200, { 'content-type': 'image/png' })
    res.write(homeLogo)
    res.end()
  } else if (url === '/hero-bcg.jpeg') {
    res.writeHead(200, { 'content-type': 'image/jpeg' })
    res.write(homeImage)
    res.end()
  } 
  // logic
  else if (url === '/app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000);

    console.log('server is listening on port 5000..')






