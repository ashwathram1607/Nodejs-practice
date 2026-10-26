const promise = new Promise((resolve, reject) => {
    const success=true;
    if(success){
        resolve("task completed successfully!")
    }else{
        reject("Task Failed!")
    }
});
promise
.then((result) => { 
    console.log(result);
 }) 
 .catch((error) => { 
    console.log(error); });

