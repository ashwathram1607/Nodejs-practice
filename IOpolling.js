const fs=require("node:fs");
console.log("Start");
fs.readFile("sample.txt","utf8",(error,data)=>{
    if(error){
        console.log("error",error.message);
        return;
    }
    console.log("File Read Callback");
    console.log("File",data)
    setImmediate(()=>{
        console.log("Inside SetImmidiate");
    });
        setTimeout(()=>{
            console.log("Inside setTimeout");
        },0)
        console.log("End");

    })
