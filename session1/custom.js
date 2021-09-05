//variables  => var, let, const
// const x =5
// x=10
// let z=5
// var z=5
// z=5

// let z = 5
// let z = 15
// let z = 20

// const x
// var x =5
// if(true){
//     var x = 10
//     console.log(`x inside if = ${x}`)
// }

// console.log(`x outside if = ${x}`)

/*
get from user convert type
get from user tempreture
print new value
(32°F − 32) × 5/9 = 0°C
(32°C × 9/5) + 32 = 89.6°F


get user input  => 2 times call
convert c => f
convert f => c
 */

// function getUserInput(message){
//     return prompt(message)
// }

// function convertCtoF(c){
//     return (c * (9/5))+32
// }
// function convertFtoC(f){
//     return  (f-32)*(5/9)
// }

// function convertToMe(){
//     let convertType = getUserInput('please choose what do you need convert to f or convert to c')   
//     if(!convertType) return alert('please try again')
//     if(convertType!='c' && convertType!='f') return alert('please try again')
//     let temp = getUserInput(`enter the temp you want to convert to  ${convertType}`)
//     switch(convertType){
//         case 'c':
//             alert(`the temp in c = ${convertFtoC(temp)}`)
//             break;
//         case 'f':
//             alert(`the temp in f = ${convertCtoF(temp)}`)
//             break;            
//     }
// }

// convertToMe()

// function getNetSalary(salary){
//     let dis
//     if(salary<=1000) dis= 0
//     else if(salary<=5000) dis= 0.05
//     else dis = 0.1
//     return salary*(1-dis)  // salary - salary*dis    1*salary - dis*salary
// }

// let userName = getUserInput('please enter your name to exit enter 0')
// let salary = getUserInput('please enter your salary')
// alert(`${userName} net salary = ${getNetSalary(salary)}`)


// choice = 1
// userName=1
// for(;;){
//     let userName = getUserInput('please enter your name  to exit enter 0')
//     if(userName=='0') break;
//     let salary = getUserInput('please enter your salary')
//     alert(`${userName} net salary = ${getNetSalary(salary)}`)
// }

// changeSataus()

// let changeSataus = function(){
//     alert("hello")
// }

// changeSataus()

// console.log(z)
// let z=10

// x = [10, 'hello', true, 5.5, 6,8,5556]
// for(i=0; i<x.length; i++)  console.log(x[i])
// x.forEach( (element, i) => console.log(`${i+1} - ${element}`) );
// for(d of x) console.log(d)
// user ={
//     name:"hadeer",
//     age:25,
//     salary:1000
// }
// console.log(user['name'])
// for(myKey in user){
//     console.log(`${myKey} => ${user[myKey]}`)
// }

// console.log(Object.values(user))
// let posts = [
//     {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true
//     },
//     {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false
//     },
//     {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true
//     }
//     ]
// let keys = [ "userId", "id", "title", "completed" ]

// posts.forEach( (element, index) => {
//     console.log(`post ${index+1} :`)
//     Object.keys(posts[0]).forEach(k=>{
//         console.log(` ${k} => ${element[k]}`)
//     })    
// });
// let myFun = function(val1, val2){
//     let result = {
//         add: val1+val2,
//         sub: val1-val2
//     }
//     return result
// }



// let x = 5;

// let myFun = function(x){
//     x=15
// }

// myFun(x)
// console.log(x)

// user={name:"marwa", age:36}

// let myFun1= function(u){
//     u.name="mazen"
// }

// myFun1(user)
// console.log(user)



// let z =5
// let fun = function(y){ 
//     y=9 
//     console.log(z)
// }
// fun(z)
// console.log(y)



// x=[1,2,3]
// function test(val){
//     val[1]= 9
// }
// test(x)

// console.log(x)

// emp = [
// {name:"mazen", salary:5000},
// {name:"marwa", salary:3000},
// {name:"omar", salary:8000}
// ]

// function updateSalary(empName){
//     empName.salary += empName.salary*0.1
//     empName.test="test test"
// }

// emp.forEach(singleEmp => {
//    updateSalary(singleEmp) 
// });

// console.log(emp)


// let  user = {
//     name:"marwa",
//     bYear: 1985,
//     getAge: function(year){
//         age=year-this.bYear
//         return age
//     } 
// }

// console.log( user.getAge(2021) )

/*
users = []
users => {name, age, job}
addUser => name, age, job => push users
show all users => print users
*/
let user = [];
let x = prompt("enter your name");
    let y = prompt("enter your age");
    let z = prompt("enter your job");
    
function addUser (name, age, job) {
    user.push({name:name, age:age, job:job});
}
addUser(x,y,z);

console.log(user);













