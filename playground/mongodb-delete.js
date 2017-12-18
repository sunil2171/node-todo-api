// var MongoClient = require('mongodb').MongoClient;
var {MongoClient,ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err,db){
    if(err){
        return console.log("Unable to connect MongoDB server");
    }
    console.log("COnnected to Mongo DB server");

  
//deleteMany
// db.collection('Todos').deleteMany({text:'Eat Lunch'}).then(function(result){
//     console.log(result);
// });

//deleteOne
    // db.collection('Todos').deleteOne({text:'Hit the Gym'}).then(function(result){
    //     console.log(result);
    // });

//findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then(function(result){
        console.log(result);
        console.log("FindOneAndDelete");
    });

// db.close();
});