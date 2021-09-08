let avlClasses = ['a','b', 'c']
addStudent = (name, className) =>{
    if( !avlClasses.includes(className) ) return console.log('error class')
    let student = {
        name, className
    }
    console.log(student);
}
module.exports = {addStudent}