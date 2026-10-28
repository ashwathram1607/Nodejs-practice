const http=require("node:http");
const server=http.createServer((req,res)=>{
    console.log("Method:",req.method);
    console.log("URL",req.url);
    if(req.url=="/"){
         res.writeHead(200,{
        "Content-Type":"text-plain"
         });

res.end("Welcome To Home Page");
        }else{
            res.writeHead(404,{
                "Content-Type":"text-plain"

            });
            res.end("404 Page Not Found");
        }
    });
        


    console.log("Request Recieved from Browser!");
    
    server.listen(3000,()=>{
        console.log("Server Running On Port 3000");
}) 