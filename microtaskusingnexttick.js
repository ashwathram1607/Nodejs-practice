console.log("start");
process.nextTick(()=>{
    console.log("Next Tick");
});
Promise.resolve().then(()=>{
    console.log("Promise");
});
console.log("End");