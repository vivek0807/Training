const express=require('express')();
const data=require('./data.json')
var parser=require('body-parser');
const { json } = require('body-parser');

var axios=require('axios')
//greet/?user=value or /valu

express.get('/users',(req,res)=>{
    res.send(JSON.stringify(data))
})



express.get('/users/:id',(req,res)=>{
    obj="No such Id found"
    data.forEach( ele=>{
        console.log(ele.id);
        console.log("req params "+req.params.id);
        if(ele.id==req.params.id){
            obj=JSON.stringify(ele);
        }
    })
    console.log(obj);
    res.send(obj);
}
);
express.get('/users/10',(req,res)=>{
    res.send("Bad request")
 
 }
 );



express.get('/userid/:id',(req,res)=>{
    try{
        const users=axios.get('https://jsonplaceholder.typicode.com/userid').then(rest=>rest.send(data))
    
    }
    catch(e){

    }
}
)

express.get('/user:name',(req,res)=>{
    res.send(req.params.user);
    res.end("Sent")
})

express.listen(55555);