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












