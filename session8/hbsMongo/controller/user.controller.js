const  ObjectId  = require('mongodb').ObjectId
const dbCon = require('../models/dbConnection')

const addUser = (req,res) => {
    res.render('add',{
        pageTitle:"add user"
    })
}

const saveUser = (req, res)=>{
    let user = req.body
    dbCon((err, db)=>{
        if(err) res.send(err)
        db.collection('user').insertOne(user, (error, result)=>{
            if(error) res.send(error)
            res.redirect('/')
        })
    })
}
const getAll = (req,res) => {
    //read from db
    dbCon((error, db)=>{
        if(error) res.send(error)
        db.collection('user').find().toArray((err, allUsers)=>{
            if(err) res.send(err)
            res.render('all',{
                pageTitle:"all Users",
                data:allUsers,
                isEmpty:allUsers.length==0? true: false
            })
        
        })
    })
}
const getSingle = (req,res) => {
    dbCon((err, db)=>{
        if(err) res.send(err)
        db.collection('user').findOne({_id: new ObjectId(req.params.id)}, (e, data)=>{
            if(e) res.send(e) 
            if(!data) res.render('err404', {
                pageTitle:"User Not Found",
                err: `No user With id ${req.params.id}`
            })
            res.render('single',{
                pageTitle:"Single User",
                user: data
            })    
    
        })
    })
}
const deleteUser = (req,res) => {
    dbCon((error, db)=>{
        if(error) res.send(error)
        db.collection('user').deleteOne({_id: new ObjectId(req.params.id)})
        .then(()=> res.redirect('/'))
        .catch(e=> res.send(e))
    })
}

const editUser = (req,res) => {
    dbCon((err, db)=>{
        if(err) res.send(err)
        db.collection('user').findOne({_id: new ObjectId(req.params.id)}, (e, data)=>{
            if(e) res.send(e) 
            if(!data) res.render('err404', {
                pageTitle:"User Not Found",
                err: `No user With id ${req.params.id}`
            })
            res.render('edit',{
                pageTitle:"Single User",
                user: data
            })    
    
        })
    })
}
const updateUser = (req,res) => {
    dbCon((error, db)=>{
        if(error) res.send(error)
        db.collection('user').updateOne(
            {_id: new ObjectId(req.params.id)},
            {$set: req.body}
        )
        .then(()=> res.redirect('/'))
        .catch((e)=>res.send(e))
    })
    res.redirect('/')
}

const err404 = (req,res)=>{
    res.render('err404', {
        pageTitle:"Error Page",
        err: "not found"
    })
}
module.exports = { addUser, getAll, getSingle, editUser, saveUser, err404, deleteUser, updateUser }