const path = require("node:path");
const filePath = "D:/NodeJS-Practice/index.html";
console.log("File Name:", path.basename(filePath));
console.log("Folder Name:", path.dirname(filePath));
console.log("File Extention:",path.extname(filePath));
console.log("Full Path:", path.resolve(filePath));