const http = require('http')
const fs = require('fs')
const path = require('path')

console.log('http://localhost:3000/')
http.createServer((req,res) => { 
  
    if (req.url === '/') req.url = '/index.html'
    
    let eName = path.extname(req.url)
    let cType = 'text/html' 

    switch(eName) {
        case '.html':
            cType = 'text/html';
        break;
        case '.css':
            cType = 'text/css';
        break;
        case '.png':
            cType = 'image/png';
        break;
        case '.jpg':
            cType = 'image/jpeg';
        break;     
        case '.webp':
            cType = 'image/webp'
        break;
        default: 
            cType = 'text/html';
        break; 
    }
    
    fs.readFile(process.cwd() + req.url, (err, data) => {

        if (err) {
            fs.readFile(process.cwd() + '/404.html', (error, content) => {
                if (error) throw error
                    res.writeHead(404, { 'Content-Type': cType });
                    res.end(content, 'utf-8');
            });
        }    
        
        else {
            res.writeHead(200, {'Content-Type': cType})
            res.end(data, 'utf-8')
        }
        
    })
}).listen(3000);