var express = require("express");
var bodyParser = require('body-parser');

var {mongoose}= require("./db/mongoose.js");
var Todo = require('./models/todo.js');
var User = require('./models/user.js');


var app = express();

app.use(bodyParser.json());

app.post('/todos', function(req,res){
    console.log(req.body);
})

app.listen(3000, function(){
    console.log("Server is Up at port 3000");
});