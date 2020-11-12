const http = require('http')
const fs = require('fs')

console.log('server started et : http://localhost:3000/')

http.createServer((req,res)=>{
    if ((req.url==='/') || (req.url==='/index.html'))
    fs.readFile(process.cwd() + '/index.html', 'UTF-8',(error,data)=>{
        if (error) throw error
            res.writeHead(200,{'Content-type':'text/html'})
                res.end(data)
    })

    if (req.url==='/style.css')
    fs.readFile(process.cwd() + '/style.css', 'UTF-8',(error,data)=>{
        if (error) throw error
            res.writeHead(200,{'Content-type':'text/css'})
                res.end(data)
    })

    if (req.url==='/public/2.html')
    fs.readFile(process.cwd() + '/public/2.html', 'UTF-8',(error,data)=>{
        if (error) throw error
            res.writeHead(200,{'Content-type':'text/html'})
                res.end(data)
    })
}).listen(3000)