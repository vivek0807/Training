//var express=require('express')
var express = require('express');

var router = express.Router();

var seneca=require('seneca')({log:'quiet'});
var entities=require('seneca-entity');


seneca.use(entities);
seneca.use(require('./plugin'))



/* GET users listing. */
router.get('/', function(req, res) {
  seneca.act({role:"test",action:"test"},(err,gets)=>{
        res.send(gets.message);
  })
});
seneca.ready((err)=>{
    if(err)
        console.log(err)
    seneca.listen(8585)
})
module.exports = router;