
module.exports = function cartplugin(options) {
    this.add({ init: "cartplugin" }, (args, respond) => {
        console.log("Cart plugin initialized");
        respond();        
});
    
    this.add({ role: "cart", action: "add" }, (args, respond) => {
        const cartEntity = this.make$("cart")
       // cartEntity.id = 10;
        cartEntity.title = args.title;
        cartEntity.save$((err, books) => {   
            if (err) return console.log(err)
            respond(null, {message:"Book with title "+books.title+" added to cart"});
        })
    })

this.add({role:"cart",action :"view"},(args,respond) =>{

    const cartEntity = this.make$("cart")
    cartEntity.list$({}, (err, books) => {     
            respond(null, books);
        })
})

this.add({ role: "cart", action: "checkout" }, function (args, respond) {
    this.act({ role: "cart", action: "view" }, function (error, response) {
      if (error) console.log(error);
      console.log("Book list" + response);
      this.client({
        type: "amqp",
        pin: "role: order, action:checkout",
        url: "amqp://guest:guest@localhost:5672",
      }).act(
        { role: "order", action: "checkout", books: response },
        function (err, res) {
          if (err) return console.error(err);
          // const orderid = res.orderid;
          var cart = this.make$("cart");

          cart.remove$({}, function (err, list) {
            respond(null, { message: "Thanks for placing an order!" });
          });
        }
      );
    });
  });
}