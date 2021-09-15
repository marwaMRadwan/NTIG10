// npm init --y
// npm i mongodb
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectId} = require('mongodb')

const dbURL = "mongodb://127.0.0.1:27017"
const dbName = "g10DB"

MongoClient.connect(dbURL, {}, (err, client)=>{
    if(err) return console.log('unable to connect to db');

    const db = client.db(dbName)

    // db.collection('students').insertOne(
    //     {name:"marwa", age:36},
    //     (error, result)=>{
    //         if(error) return console.log('error inserting data');
    //         console.log('inserted success');
    //         console.log(result)
    //     }
    // )

    // db.collection('students').insertMany(
    //     [{name:"marwa", age:36}, {name:"omar", age:6}, {name:"mazen",age:40},{name:"nouran", age:26} ],
    //     (error, result)=>{
    //         if(error) return console.log('error inserting data');
    //         console.log('inserted success');
    //         console.log(result.insertedCount)
    //     }
    // )

// db.collection('students').find({name:"marwa", age:36}).toArray((err,res)=>{
//     console.log(res)
// })

// db.collection('students').findOne(
//     {_id:new ObjectId("6141ae378f578fe45e7bdaaf")} ,
//     ( (error, res) => { console.log(res)} ) 
//     )

// db.collection('students').updateMany( 
//     {name:"omar"},
//     { $inc: {age:1} }
//     )
//     .then((res)=>{
//         console.log(res)
//     })
//     .catch(e=> console.log(e))


db.collection('students').deleteMany( {name:"mazen"} )
.then( res => { console.log(res) })
.catch( e => console.log(e))

})


