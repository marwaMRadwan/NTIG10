const fs = require('fs')
const readJsonFile = () =>{
    let allUsers
    try{
        allUsers = JSON.parse(fs.readFileSync('models/users.json').toString())
        if(!Array.isArray(allUsers)) throw new Error()
    }
    catch(e){
        allUsers = []
    }
    return allUsers
}
const saveJsonFile = (allUsers) =>{
    fs.writeFileSync('models/users.json', JSON.stringify(allUsers))
}
const addUser = (req,res) => {
    // if(req.query.name){
    //     let user = req.query
    //     // console.log(allUsers)
    //     allUsers.push(user)
    //     saveJsonFile(allUsers)
    // }
    res.render('add',{
        pageTitle:"add user"
    })
}
const saveUser = (req, res)=>{
    // res.send(req.body)
    let allUsers = readJsonFile()
    let user = {
        id: Date.now(),
        ...req.body
    }
    allUsers.push(user)
    saveJsonFile(allUsers)
    res.redirect('/')
}
const getAll = (req,res) => {
    let allUsers = readJsonFile()
    res.render('all',{
        pageTitle:"all Users",
        data:allUsers,
        isEmpty:allUsers.length==0? true: false
    })
}
searchUser = (allUsers, id) => {
    let index = allUsers.findIndex(ele=>{
        return ele.id==id
    })
    return index
}
const getSingle = (req,res) => {
    let allUser = readJsonFile()
    let userIndex = searchUser(allUser, req.params.id)
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
    let allUser = readJsonFile()
    let userIndex = searchUser(allUser, req.params.id)
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
    let allUser = readJsonFile()
    let userIndex = searchUser(allUser, req.params.id)
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