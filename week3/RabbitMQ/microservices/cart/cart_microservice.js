const seneca=require("seneca")();
const entities = require("seneca-entity");
const mongostore=require("seneca-mongo-store")
seneca.quiet();

seneca.use(entities);
seneca.use(mongostore, {
    name: "mybookstore",
    host: "127.0.0.1",
    port:27017
})
seneca.use("seneca-amqp-transport");
seneca.use(require("./cart_plugin"));
// seneca.act({role : "catalog",action :"searchbyname", name:"Unlocking Android"},(err,output) => {
//     if(err)
//     return console.error(err);
//     console.log(output.result);
// })
// seneca.act({role : "catalog",action :"searchbycategory", category:"Software Engineering"},(err,output) => {
//     if(err)
//     return console.error(err);
//     console.log(output.result);
// })
// seneca.act({role : "catalog",action :"searchbyrating", rating:"4"},(err,output) => {
//     if(err)
//     return console.error(err);
//     console.log(output.result);
// })
seneca.ready((err) => {
    seneca.listen(8586);
})

//http://localhost:8586/act?role=cart&action=add&title=Unlocking Android