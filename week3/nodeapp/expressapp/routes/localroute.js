var express = require('express');
var books=require('./books.json')
const { response } = require('../app');
var router = express.Router();
var seneca=require('seneca')();

seneca.client()// new port
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
var newarr=[]
router.get('/',(req,res)=>{
    books.forEach(Element=>{
        newarr.push(JSON.stringify(Element.title))
    })
    res.send(newarr);

    //addd seneca act here
    
})
module.exports = router;