const { error } = require("node:console");
const fs = require("node:fs");
const readableStream = fs.createReadStream(
    "D:/NodeJS-Practice/input.txt",
    "utf8"
);
readableStream.on("data", (chunk) => {
    console.log("Received chunk:");
    console.log(chunk);
});
readableStream.on("end", () => {
    console.log("File reading completed!");
});
readableStream.on("error", (error) => {
    console.log("Error:",error.message)
})