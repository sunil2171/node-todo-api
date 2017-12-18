var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err,db){
    if(err){
        return console.log("Unable to connect MongoDB server");
    }
    console.log("COnnected to Mongo DB server");


    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a266cec6795001cf0b5a2a1')
    // },{
    //     $set: {
    //        completed: false
    //     }
    
    // },{
    //         returnOriginal: false
    // }).then(function(result){
    //     console.log(result);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a266e28b9e1ae07a477ae75')
    },{
        $set: {
           name: 'Sathua'
        },
        $inc: {
            age: +1
        }
    
    },{
            returnOriginal: false
    }).then(function(result){
        console.log(result);
    });

});