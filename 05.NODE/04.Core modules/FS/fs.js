const { readFileSync, writeFileSync } = require("fs");

let fileONe = readFileSync("./first.txt", "utf-8");

console.log("fileOne", fileONe);

let fileTwo = readFileSync("./second.txt", "utf-8");

console.log("second file",fileTwo);


writeFileSync("./third.txt", `\n${fileTwo},\n${fileONe}`,{ flag: "a" });
