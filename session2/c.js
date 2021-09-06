// function x(){
//     return function(){
//         console.log('test')
//     }
// }
// console.log(x()())
// x()()

// clousers
// const counter = (a,b ) =>{
//     x = 5
//     return {
//         x, 
//         add( ) { return a+b },
//         sub( ) { return a-b }
//     }
// }

// const c = counter(5,2)
// console.log(c.add())
// console.log(c.x)

//callback

// const x = ( val, cb ) => {
//     if(typeof val == 'number') cb('this is a number', false)
//     else cb(false, 'isn\'t a number ')
// }

// x("hello", ( result, err ) => {
//     if(result) console.log(result)
//     else console.log(err)
// }
// )

const checkData = (val, cb)=>{
    if(typeof val==='number') cb('it\'s a number', false)
    else cb(false, 'it is not a number')
}


checkData(
   5, 
    (res, err)=>{
        console.log(res)
        console.log(err)
    }
)


// addEventListener('click', (e)=>{

// })
// addEventListener(x, cb){
//     function x(){
//         function z(){
//             function w(){
//                 cb(e)
//             }
//         }
//     }
// }




