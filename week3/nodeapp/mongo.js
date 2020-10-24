//npm i seneca-mongo-store

const seneca=require('seneca')({log:"quite"});
const entity=require('seneca-entity');
const mongostore=require('seneca-mongo-store');
seneca.use(entity);
seneca.use(mongostore,{
name: "db",
host: "127.0.0.1",
port:27017
})

seneca.ready((err)=>{
    const prod=seneca.make$("collectionSeneca")
    prod.id=1;
    prod.name=2;
    prod.save$((err,prod)=>{
        if(err)
            console.log("The product has been added")
    });

  //  prod.list$

})