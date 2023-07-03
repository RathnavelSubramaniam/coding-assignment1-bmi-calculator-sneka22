const bodyparser = require('body-parser');
const express= require('express')
// import express from 'express'

const app= express();
app.use(bodyparser.urlencoded({extended:true}))
const port= 4005;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/bmi.html')
  })

app.post('/', (req, res) => {
    var weight= Number(req.body.kg);
    var height= Number(req.body.cm);
    var result= ((weight) / ((height* height)/10000)).toFixed(2);
    res.send('BMI is: ' + result)

  })

app.listen(port, () =>{
    console.log(`listening to the port ${port}`)
})