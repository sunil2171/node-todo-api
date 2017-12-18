
// var MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb');

var users = {name:"Sunil",age:23,location:"Munnenkollal"}
var {name} = users;

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err,db){
    if(err){
        return console.log("Unable to connect MongoDB server");
    }
    console.log("COnnected to Mongo DB server");

    db.collection('Users').find({name:'Sunil'}).toArray().then( function(docs){
        console.log(JSON.stringify(docs, undefined, 2));
    });

   // db.close();
});