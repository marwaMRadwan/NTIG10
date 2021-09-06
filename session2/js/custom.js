// localStorage.setItem('myelement', 'hello')

// localStorage.removeItem('myelement')

// let data = localStorage.getItem('myelement')
// alert(data)

// let myUser = [{u:'user1'}, {u:'user2'}, {u:'user3'}]

// localStorage.setItem('users', JSON.stringify(myUser) )

// x = JSON.parse(localStorage.getItem('users'))

// console.log(x[0])
// true   false    undefined  null false "" 0 


// let tasks = JSON.parse(localStorage.getItem('tasks')) || []
// tasks.push('test')
// localStorage.setItem('tasks', JSON.stringify(tasks))
// console.log(tasks)

//get elements from html
let myForm = document.querySelector('#myForm')
let tableBody = document.querySelector("#tableBody")
//functions
let readData = () => JSON.parse(localStorage.getItem('tasks')) || []

let setData = (data) => localStorage.setItem('tasks', JSON.stringify(data))

// function readData(){
//     return JSON.parse(localStorage.getItem('tasks')) || []
// }
// let myData = function(){
//     return JSON.parse(localStorage.getItem('tasks')) || []
// }
// let myData1 = () =>{
//     return JSON.parse(localStorage.getItem('tasks')) || []
// }
//actions (events)
let createMyOwnElement = (parent, element, txt, classes) =>{
    let myElement = document.createElement(element)
    parent.appendChild(myElement)
    if(txt!="") myElement.innerText = txt
    if(classes!="") myElement.classList = classes
    return myElement
}

let drawTable = (tasks)=>{
    tableBody.innerText = ""
    tasks.forEach((task, index) => {
        let tr = createMyOwnElement(tableBody, 'tr', '', '')
        createMyOwnElement(tr,'td', index+1, "")
        createMyOwnElement(tr,'td', task.taskTitle, "")
        createMyOwnElement(tr,'td', task.taskContent, "")
        let td = createMyOwnElement(tr, 'td','','')
        let btnDelete= createMyOwnElement(td, 'button', 'delete', 'btn btn-danger')
        btnDelete.addEventListener('click', function(e){
            // alert(index)
            tasks.splice(index,1)
            setData(tasks)
            drawTable(tasks)
        })
        // let tr = document.createElement('tr')
        // tableBody.appendChild(tr)
        // td = document.createElement('td')
        // td.innerText = index+1
        // tr.appendChild(td)
        // td = document.createElement('td')
        // td.innerText = task.taskTitle
        // tr.appendChild(td)
        // td = document.createElement('td')
        // td.innerText = task.taskContent
        // tr.appendChild(td)
        // td = document.createElement('td')
        // tr.appendChild(td)
        // btnDelete = document.createElement('button')
        // btnDelete.classList= "btn btn-danger"
        // btnDelete.innerText="delete"
        // td.appendChild(btnDelete)
    })
}


if(myForm){  //if(false)  if(true)
    myForm.addEventListener('submit', function(e) {
        e.preventDefault()
        let tasks = readData()
        let task = {
            taskTitle : this.elements.taskTitle.value,
            taskContent:this.elements.taskContent.value
        }
        console.log(task)
        tasks.push(task)
        setData(tasks)
        this.reset()
        window.location.href="allTasks.html"
    })
}

if(tableBody){
    tasks = readData()
    drawTable(tasks)
}






