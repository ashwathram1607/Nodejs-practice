const crypto=require("node:crypto");
console.log("program started");
const starttime=Date.now();
for (let i = 1; i <= 5; i++) {
    crypto.pbkdf2(
        "password",
        "salt",
        100000,
        64,
        "sha512",
        (err,key)=>{
            if(err){
                console.log(err);
                return

            }
            console.log(`Task ${i}completed`);
            console.log(`Time: ${Date.now() - starttime} ms`);
        }
        
    );
}
console.log("Program Ended")