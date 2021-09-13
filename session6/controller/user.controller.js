
const getAll = (req,res) => {
    res.render('all',{
        pageTitle:"all Users"
    })
}
const getSingle = (req,res) => {
    res.render('single',{
        pageTitle:"Single User"
    })
}
const editUser = (req,res) => {
    res.render('edit',{
        pageTitle:"Edit User"
    })
}
const addUser = (req,res) => {
    res.render('add',{
        pageTitle:"add user"
    })
}
module.exports = {
    addUser, getAll, getSingle, editUser
}