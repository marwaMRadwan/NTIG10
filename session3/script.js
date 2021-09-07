// console.log(5)
// setTimeout(()=>{
//     console.log(19)
// }, 1000)
// console.log(5)

// const mypromise = (val) => new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         typeof val=="number"? resolve(val*5) : reject('val is not a number')
//     },2000)
// })

// mypromise('ds').then(
//     data=>{console.log(data)},
//     err=>{console.log(err)}
// )
// console.log('test')
// const myCall = async()=>{
//     data = await  mypromise(15)
//     console.log(data)
// }

// myCall()



body = document.querySelector('body')
getApiData = async(apiUrl , cb) =>{
    let data = await fetch(apiUrl)
    data = await data.json()
    // let data = await (await fetch(apiUrl)).json()
    // return data
    cb(data)
}


getApiData('https://jsonplaceholder.typicode.com/photos?_limit=12', (x)=>{
    x.forEach(element => {
       img = document.createElement('img')
       img.src =  element.thumbnailUrl
       body.appendChild(img)
    });
})

getApiData('https://jsonplaceholder.typicode.com/users', (data)=>{
    console.log(data)
})

// getApiData().then(
//     data=>{}
// )




