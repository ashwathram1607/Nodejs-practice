const os=require("node:os")
console.log("Operating System:",os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:",os.hostname());
console.log("Total Memory:", os.totalmem());
console.log("FreeMemory:",os.freemem());