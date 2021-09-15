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
    // find in db

    if(userIndex==-1) res.render('err404', {
        pageTitle:"User Not Found",
        err: `No user With id ${req.params.id}`
    })
    else{
        res.render('single',{
            pageTitle:"Single User",
            user: allUser[userIndex]
        })    
    }
}
const deleteUser = (req,res) => {
    //delete from db
    
    if(userIndex==-1) res.render('err404', {
        pageTitle:"User Not Found",
        err: `No user With id ${req.params.id}`
    })
    else{
        allUser.splice(userIndex,1)
        saveJsonFile(allUser)
        res.redirect('/')    
    }
}

const editUser = (req,res) => {
  //edit in db

    if(userIndex==-1) res.render('err404', {
        pageTitle:"User Not Found",
        err: `No user With id ${req.params.id}`
    })
    else{
        res.render('edit',{
            pageTitle:"Edit User",
            user: allUser[userIndex]
        })    
    }
}
const updateUser = (req,res) => {
    let allUser = readJsonFile()
    let userIndex = searchUser(allUser, req.params.id)
    allUser[userIndex].name= req.body.name
    allUser[userIndex].age= req.body.age
    allUser[userIndex].email= req.body.email
    allUser[userIndex].address= req.body.address
    saveJsonFile(allUser)
    res.redirect('/')
}

const err404 = (req,res)=>{
    res.render('err404', {
        pageTitle:"Error Page",
        err: "not found"
    })
}
module.exports = { addUser, getAll, getSingle, editUser, saveUser, err404, deleteUser, updateUser }