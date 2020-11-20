var express = require('express');
const seneca = require("seneca")();
const entities = require("seneca-entity");
var router = express.Router();
seneca.quiet();
seneca.use(entities)
seneca.client(8586);
/* GET users listing. */
router.get('/add/:title', function(req, res, next) {
  //res.header('Access-Control-Allow-Orgin',"*");
  seneca.act({role : "cart",action :"add", title:req.params.title},(err,result) => {
    if(err)
      return console.error(err);
    console.log(result)
    res.send(result);
})
});
router.get('/view', function(req, res, next) {
  //res.header('Access-Control-Allow-Orgin',"*");
  seneca.act({role : "cart",action :"view"},(err,books) => {
    if(err)
      return console.error(err);
    console.log(books)
    res.send(books);
})
});
router.get("/checkout", (req, res, next) => {
  seneca.act({ role: "cart", action: "checkout" }, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

module.exports = router;

//http://localhost:3000/cart/add/Unlocking Android