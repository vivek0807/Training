const seneca=require('seneca')({log:'quiet'});
const plugin=require('./plugin');

seneca.use(plugin,{message : "Call from another file"});

seneca.act({role:"skills",action:"addnew",skill1:"C"},(err,recieve)=>{
    if(err)
        console.log(err.message);
    else
        console.log(recieve.message);
})







var products=[{id:1 ,name :"samsungMonitor", rarting :5, category : "Electornics"},
{id:2 ,name :"A70", rarting :4, category : "Electornics"},
{id:3 ,name :"Thinkpad", rarting :5, category : "Laptops"}
]

seneca.act({role:"srch",action: "prod",id:1},(err,recieve)=>{
    if(err)
        console.log(err.message);
    else
        console.log(recieve.message);
})

seneca.add({role:"srch",action:"prod"},(args,respond)=>{
    byid=args.id;
    found=false;
    products.forEach(element => {
        if(element.id==byid)
            {
                respond(null,{message: byid+" was found"})
                found=true;
            }

    });
    if(found==false)
        respond(null,{message: byid+ " Was not found"})
    
})
seneca.listen(55555);
///act?role=math&action=add&ac=10&b=20
//chekc init function