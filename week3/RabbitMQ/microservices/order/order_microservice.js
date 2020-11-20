var seneca = require("seneca")();
var entities = require("seneca-entity");

seneca.quiet();
seneca.use("seneca-amqp-transport");
seneca.use(entities);
seneca.use("mongo-store", {
  name: "mybookstore",
  host: "127.0.0.1",
  port: 27017,
});
seneca.use(require("./order_plugin"));
seneca.ready(function (err) {
  console.log("Order service is ready!!!!");
  seneca.listen({
    type: "amqp",
    pin: "role: order,action:*",
    url: "amqp://guest:guest@localhost:5672",
  });
});
