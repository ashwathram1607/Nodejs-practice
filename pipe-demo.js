const fs=require("node:fs");
const readStream=fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");
writeStream.on("finish", () => {
    console.log("File copied successfully!");
});
readStream.on("error", (error) => {
    console.error("Read Error:", error.message);
});
readStream.pipe(writeStream);
            
