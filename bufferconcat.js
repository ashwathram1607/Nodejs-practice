const first = Buffer.from("Good ");
const second=Buffer.from("Morning");
const result=Buffer.concat([first,second]);
console.log(result.tostring());