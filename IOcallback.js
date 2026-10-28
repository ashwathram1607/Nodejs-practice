const { error } = require("node:console");
const fs=require("node:fs");
console.log("Start");
fs.readFile("sample.txt","utf8",(error,data)=>{
    if(error){
        console.log("Error",error.message);
        return;
    }
    console.log("File Data:",data);
});
console.log("End");