var express = require('express');
const seneca = require("seneca")();
const entities = require("seneca-entity");
var router = express.Router();
seneca.quiet();
seneca.use(entities)
seneca.client(8585);
/* GET users listing. */
router.get('/title/:title', function(req, res, next) {
  //res.header('Access-Control-Allow-Orgin',"*");
  seneca.act({role : "catalog",action :"searchbyname", title:req.params.title},(err,books) => {
    if(err)
      return console.error(err);
    console.log(books)
    res.send(books);
})
});
router.get('/category/:category', function(req, res, next) {
  seneca.act({role : "catalog",action :"searchbycategory", category:req.params.category},(err,books) => {
    if(err)
    return console.error(err);
    res.send(books);
})
});
router.get('/rating/:rating', function(req, res, next) {
  seneca.act({role : "catalog",action :"searchbyrating", rating:req.params.rating},(err,books) => {
    if(err)
    return console.error(err);
    res.send(books);
})
});

module.exports = router;

//http://localhost:3000/catalog/title/Unlocking Android