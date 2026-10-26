const text="hello";
const buffer=Buffer.from(text,"utf8");
console.log("Orginal Text:",text);
console.log("Buffer:",buffer);
console.log("Decoded Text:",buffer.toString("utf8"));
