/*
var http = require('http')

http.createServer(function(req, res){

    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("Welcome Aliens")
}).listen(6969)

var calc = require('./calc.js')

result = calc.add(4,5)
result2 = calc.sub(10,11)
result3 = calc.mul(2,20)

console.log("The Output is " + result,result2,result3)


var fs = require('fs')

fs.writeFile('calc.js','console.log("This is rewritten")', function(err){
    console.log("ReWritten")
})
fs.unlink('calc1.js', function(err){
    console.log("Deleted")
})
fs.readFile('calc.js', 'utf8', function(err, data){
    console.log(data)
})
*/


const express = require('express');

const app = express();

app.get('/', function(req,res){

    res.send("Hello World")
})

app.get('/alien', function(req, res){

    const id = req.query.id
    
    res.send('Welcome Back Alien ' + id)
})

app.get('/alien/:id', function(req, res){
    const id = req.params.id
    res.send('Hello Avinash ' + id)
})

app.listen(6969, function(req, res){
    console.log('Running......')
})

