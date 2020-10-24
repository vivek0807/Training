const seneca = require("seneca")();
const entities = require("seneca-entity");
const mongostore=require("seneca-mongo-store")
seneca.quiet();
seneca.use(entities);
seneca.use(mongostore, {
    name: "mybookstore",
    host: "127.0.0.1",
    port:27017
})
seneca.ready((err) => {
    const prod = seneca.make$("product");
    prod.id = 2;
    prod.name = "Desktop";
    prod.price = 75000
    prod.save$((err, prod) => {
        if (err) return console.error(err);
        console.log(prod.name + " added ")
        prod.list$({},(err,products)=>console.log(products))
    })
})
