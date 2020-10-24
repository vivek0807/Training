//const seneca=require('seneca')({log:"quiet"})

module.exports=function plugin(options){

   /* this.add({init:'plugin'},(args,res)=>{
        res(null,{message:"chal gaya"})
    })*/

    this.add({action:"test",role:"test"},(args,respond)=>{
        respond(null,{message:"Working"})
    })

}