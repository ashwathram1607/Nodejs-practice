const EventEmitter = require("node:events");
const emitter = new EventEmitter();
emitter.on("greet",()=>{
    console.log("Hello Welome to Node js");
});
emitter.emit("greet");