const fs=require("node:fs");
console.log("Start");
fs.readFile("sample.txt", "utf8", (err, data) => {
    if(err){
        console.log(err.message)
        return;
    }
    console.log(data)
});
console.log("End");