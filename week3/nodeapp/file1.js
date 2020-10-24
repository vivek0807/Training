var express=require('express');
var http=require('http');
const fs=require('fs')

var app=express();

const data=fs.readFileSync('data.txt','utf-8');
console.log(data)

console.log("Message");
fs.copyFile("data.txt", "data_copy.txt", (err) => { 
    if (err) { 
      console.log("Error Found:", err); 
    } 
    else { 
      //getCurrentFilenames(); 
      //console.log("\nFile Contents of copied_file:",  
       // fs.readFileSync("copied_file.txt", "utf8"));
    } 
  });



fs.readFile('data.txt','utf-8',function(err,data){
    if(err){
        console.log("Error reading")
    }
    else
        {http.createServer(function (req, res) {
         //   res.writeHead(200, {'Content-Type': 'text/plain'});
            if(req.url==="/")
            {res.write("Hello World");
            res.end();}
            else if(req.url==="/great"){
                res.write("<HTML><h2>Welcome</h2></HTML>");
            res.end();
            }
            
  app.get('express',(req,res)=>{
    console.log("Express")
    res.send("Express working");
    res.end();
})
          }).listen(55555)
        
        
        }
})
