//const seneca=require('seneca')({log:"quiet"})

module.exports=function plugin(options){

   /* this.add({init:'plugin'},(args,res)=>{
        res(null,{message:"chal gaya"})
    })*/

    this.add({action:"test",role:"test"},(args,respond)=>{
       // respond(null,{message:"Enogh Now"})
        const coll=this.make$("collection");
        coll.list$({},(err,getdata)=>{respond(null,{message:getdata})})
        
       /* coll.name="Dell"
        coll.type="Electronics"
        coll.save$((err,coll)=>{
            coll.list$({},(err,getdata)=>console.log(getdata))
        })*/

      //  respond(null,{mssage:"database"});
    })

}