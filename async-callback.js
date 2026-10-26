function greet(name, callback) {
    console.log("Hello"+name);
    callback()
}
function saybye(){
    console.log("Good Bye");
}
greet("Ashwath",saybye);
    