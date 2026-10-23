function greet(name,callback){
    console.log("Hello"+name);
    callback()
}
function Welcome(){
    console.log("welcome to lern a Nodejs");
}
    greet("Venkat",Welcome)