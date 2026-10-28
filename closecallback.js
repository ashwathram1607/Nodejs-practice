const net=require("node:net")
const server=net.createServer((socket)=>{
    socket.on("close",()=>{
        console.log("Socket Closed");
        server.close();
    });
    socket.destroy();
});
server.listen(3000,()=>{
    console.log("Server Started");
const client=net.createConnection(3000);
});