const express = require('express')
var  data=require('./data.json')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/greet', (req, res) => {
  res.send('Welcome')
})

app.get('/test',(req,res)=>
{res.send("Testing test page")})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


function exporter1(){
  const a =data.filter((val)=> val.email==="Vivekk.0807@gmail.com")
}

const a =data.filter((val)=> val.email==="Vivekk.0807@gmail.com")


module.exports ={exporter1=exporter1};