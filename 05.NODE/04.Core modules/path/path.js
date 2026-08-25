const path =require("path")

console.log("seperate",path.sep);

//join 

let newPath=path.join("\main-folder","\sub-folder","\secsub-folder","first.txt")

console.log("join function",newPath);



console.log("path resolve ",path.resolve(newPath));

console.log(__dirname,newPath);



