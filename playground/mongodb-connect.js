// var MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err,db){
    if(err){
        return console.log("Unable to connect MongoDB server");
    }
    console.log("COnnected to Mongo DB server");

    // db.collection('Todos').insertOne({
    //     text: "To Do Something",
    //     completed: false
    // }, function(err, result){
    //     if (err){
    //         return console.log("Unable to insert todo", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    // db.collection('Users').insertOne({
    //     name: "Sunil Behera",
    //     age: 23,
    //     location: "Munekolla"
    // }, function(err,result){
    //     if (err){
    //         return console.log("Unable to add User", err);    
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });
    db.collection('Users').find({name:'Andrew'}).toArray().then( function(docs){
        console.log(JSON.stringify(docs, undefined, 2));
    });

    db.close();
});