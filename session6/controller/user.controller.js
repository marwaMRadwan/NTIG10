
const getAll = (req,res) => {
    res.render('all')
}
const getSingle = (req,res) => {
    res.render('single')
}
const editUser = (req,res) => {
    res.render('edit')
}
const addUser = (req,res) => {
    res.render('add')
}
module.exports = {
    addUser, getAll, getSingle, editUser
}