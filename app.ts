const http = require('http')
const fs = require('fs')
const path = require('path')

let adress
let format

console.log('server started et : http://localhost:3000/')

http.createServer((req,res)=>{

    // if (req.url==='/')
    //     fs.readFile(process.cwd() + '/index.html', 'UTF-8',(error,data)=>{
    //         if (error) throw error
    //             res.writeHead(200,{'Content-type':'text/html'})
    //                 res.end(data)
    //     })

    //     if (req.url==='/style.css')
    //     fs.readFile(process.cwd() + '/style.css', 'UTF-8',(error,data)=>{
    //         if (error) throw error
    //             res.writeHead(200,{'Content-type':'text/css'})
    //                 res.end(data)
    //     })

    if (req.url === '/'){
        req.url = '/index.html'
        format = 'text/css'
    }      
     adress = path.extname(req.url)

     switch(adress){
        case ".html":
             format = "text/html"
             break;
        case ".css":
            format = "text/css"
            break
        case ".jpg":
            format = "image/jpg"
            break
        case ".jpeg":
            format = "image/jpeg"
            break
        case ".webp":
            format = "image/webp"
            break
        case ".png":
            format = "image/png"
            break
        case "":
            format = "text/plain"
            break
        default : format = 'text/html'
     }

     fs.readFile(process.cwd() + req.url, (err, data) => {
        if (err)
            fs.readFile(process.cwd() + '/public/404.html', 'utf8', (err, data) => {
                if (err) throw err
                res.writeHead(404, { 'Content-type': 'text/html' })
                res.end(data, 'utf-8')
            })
        else {
            res.writeHead(200, { 'Content-type': format })
            res.end(data)
        }
    })

}).listen(3000), ()=>{
    console.log("Сервер запущен по http://localhost:3000");
}