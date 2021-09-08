//call modules
const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
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
    let i = searchTaskIndex(tasks, 'title', data.title )
    if(i!=-1) return console.log(chalk.red('title used before'))
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
//search task id, title, type
filterTasks = (key, seachVal) =>{
    let tasks = readDataFromJsonFile()
    let result = tasks.filter(task=>{
        return seachVal == task[key]
    })
    return result
}
// get item index by id
searchTaskIndex = (tasks,key, searchVal) =>{
    let result = tasks.findIndex(task=>{
        return searchVal == task[key]
    })
    return result
}
//edit
editTask = (taskId, newData)=>{
    let tasks = readDataFromJsonFile()
    let taskIndex = searchTaskIndex(tasks, taskId)
    if(taskIndex==-1) return console.log(chalk.red('task not found'))
    for(n in newData){
        tasks[taskIndex][n] = newData[n]
    }
    writeDataToJsonFile(tasks)
    console.log(chalk.green('task Edited'))
}

//delete
deleteTask = (taskId)=>{
    let tasks = readDataFromJsonFile()
    let taskIndex = searchTaskIndex(tasks, taskId)
    if(taskIndex==-1) return console.log(chalk.red('task not found'))
    tasks.splice( taskIndex , 1 )
    writeDataToJsonFile(tasks)
    console.log(chalk.green('task deleted'))
}

//change Status
changeTaskStatus = (taskId)=>{
    let tasks = readDataFromJsonFile()
    let taskIndex = searchTaskIndex(tasks, taskId)
    if(taskIndex==-1) return console.log(chalk.red('task not found'))
    tasks[taskIndex].status = !tasks[taskIndex].status
    writeDataToJsonFile(tasks)
    console.log(chalk.green('task Edited'))
}


module.exports = { addTask, showAll, filterTasks, deleteTask }
