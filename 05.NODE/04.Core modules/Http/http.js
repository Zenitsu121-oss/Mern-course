let http =require("http");

let PORT=4000;

let server=http.createServer((req,res)=>{

    if(req.url === "/"){
     res.writeHead(200, { "Content-Type": "text/html" });
     res.write("<h1>hello everone this  the home page</h1>");
     res.end();
    }else if(req.url === "/about "){
     res.writeHead(200, { "Content-Type": "text/html" });
     res.write("<h1>hello everone this our aboy page</h1>");
     res.end();
    }
     else{
     res.writeHead(200, { "Content-Type": "text/html" });
     res.write("<h1>Not found</h1>"); 
     }
});

server.listen(PORT , ()=>{
    console.log(`The server is running : ${PORT} `)
});

server.on("error", (err) => {
  console.log(err.message);
});