//var express=require('express')
var express = require('express');

var router = express.Router();

var seneca=require('seneca')({log:'quiet'});
var entities=require('seneca-entity');
const mongostore=require('seneca-mongo-store');
seneca.use(entities);
seneca.use(require('./plugin'))

seneca.use(mongostore,{
  name :"db",
  host: "127.0.0.1",
  port:27017
})


/* GET users listing. */
router.get('/', function(req, res) {
  seneca.act({role:"test",action:"test"},(err,gets)=>{
        res.send("Got request");
  })
});
seneca.ready((err)=>{
    if(err)
        console.log(err)
    seneca.listen(8585)
})
module.exports = router;