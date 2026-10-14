let http=require("http");


const PORT=4000;

let server = http.createServer((req,res)=>{
    res.write("welcome to the my page, thanks for the coming");
    res.end();
})