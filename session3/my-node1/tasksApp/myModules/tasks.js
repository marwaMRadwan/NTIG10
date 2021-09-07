//call modules
const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require('constants')

//read data from json file
readDataFromJsonFile = () =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync('./tasks.json').toString())
        if(!Array.isArray(data)) throw new Error('msh array')
    }
    catch(e){
        data = []
    }
    return data
}
//write data to Json File
writeDataToJsonFile = (data)=>{
    try{
        fs.writeFileSync('./tasks.json', JSON.stringify(data))
    }
    catch(e){
        console.log(chalk.red('error writing data'))
    }
}
//add new task
addTask = (data) => {
    let tasks = readDataFromJsonFile()
    let task = {
        status: false,
        id : parseInt((Date.now()) * Math.random()),
        ...data
    }
    tasks.push(task)
    writeDataToJsonFile(tasks)
    console.log(chalk.green(`data inserted successfuly and you task id is ${task.id}`))
}

//show All Tasks 
showAll = () =>{
    tasks = readDataFromJsonFile()
    tasks.forEach(task => {
        console.table(task)
    })
}

searchTask = (taskId) =>{
    let tasks = readDataFromJsonFile()
    tasks  = tasks.filter( t => taskId != t.id )
    writeDataToJsonFile(tasks)
}
// filter findindex find
module.exports = {
    addTask, showAll, searchTask
}


