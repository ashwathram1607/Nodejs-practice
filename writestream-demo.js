const { error } = require("node:console");
const fs = require("node:fs");
const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello Ashwath!/n");
writeStream.write("Learning Nodejs writestream/n");
writeStream.end();
writeStream.on("finish", () => {
    console.log("Data successfully written");
});
writeStream.on("error", (error) => {
console.log("error",(error.message));
})