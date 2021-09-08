//https://jsonplaceholder.typicode.com/posts?_limit=10
const request = require('request')

const url= "https://jsonplaceholder.typicode.com/posts?_limit=10"

// request({ url , json:true}, (err, {body})=>{
//     console.log(body)
// })


getApiResponse = (url,cb) =>{
    request({ url , json:true}, (err, {body})=>{
        if(err) cb(false, err)
        else cb( body, false)
    })
}

getApiResponse(url, (res, err)=>{
    if(err) console.log(err)
    else console.log(res)
})