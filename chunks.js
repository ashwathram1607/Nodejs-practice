const fs= require("node:fs");
const readStream=fs. createReadStream("input.txt",{
    highWaterMark: 16
});
readStream.on("data", (chunk) => {
    console.log("Received chunk:",chunk.length,"bytes");
});
    readStream.on("error", (error) => {
        console.error("Read Error:",error.message)
});
