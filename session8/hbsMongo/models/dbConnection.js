const MongoClient = require('mongodb').MongoClient

const myConnection = (cb) =>{

    MongoClient.connect(process.env.dbURL, {}, (error, client)=>{
    
        if(error) return cb(error, false)
    
        const db = client.db(process.env.dbName)
    
        cb(false, db)
    
    })

}

module.exports = myConnection