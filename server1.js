const http=require("node:http")
const server = http.createServer((req, res) => {
    if(req.url=="/"){
        res.writeHead(200,{
            "content-type":"text/plain"
        });
        res.end("Welcome to Home page")
    }else if(req.url=="/about"){
        res.writeHead(200,{
            "Content-Type": "text/plain"
        });
        res.end("welcome to About page ")
    } else if(req.url=="/contact"){
        res.writeHead(200,{
            "Content-Type": "text/plain"
        });
        res.end("welcome to contact page")
    }else{
        res.writeHead(404,{
            "Content-Type": "text/plain"

        });
        res.end("404 page not fond!")
    }
})
server.listen(3000, () => {
    console.log("Server Running at http://localhost:3000")

});
    

    