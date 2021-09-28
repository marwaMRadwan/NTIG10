const express = require('express')
const app = express()
//const app = require('express')()

require('dotenv').config()
require('../models/db/connection')
const userRoutes = require('../routes/user.routes')
const postRoutes = require('../routes/post.routes')

const cors = require('cors')
const { single } = require('../middleware/fileUpload')
app.use(cors())

app.use( express.urlencoded( { extended : true } ) )
app.use( express.json() )

app.use('/user', userRoutes )
app.use('/post', postRoutes)

let data = [{id:0,a:"x", c:10, trans:['t1','t2']}, {id:1,a:'y', c:15},{id:2,a:"z", c:10}, {id:3,a:'w', c:15}]
app.get('/test/allData', async(req,res)=>{
    //data = await Data.find()
    res.send({data})
})
app.get('/test/allData/:id', async(req,res)=>{
    //dat=await findByid(req.pa.id)
    res.send({data: data[req.params.id]})
})
app.post('/test/allData/:id/addStock', async(req,res)=>{
    try{
        let single = data[req.params.id]
        // res.send(single)
        single.c+=req.body.c
        // single.save()
        res.send(single)
    
    }
catch(e){
    res.send(e.message)
}
})
// let data = await user.find({name:name}).limit(10.sort({_id:-1}))
module.exports = app



/*
meals :[
   { date: ----,
    m: [
        type: fav,
        meal id
    ]}
]
{ date: 28/9 , m :[
    dinner, 1
    br, 2
    dinner  5
    
]}
*/