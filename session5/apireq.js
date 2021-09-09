//http https
// https://jsonplaceholder.typicode.com/posts
// npm init --y
const https = require('https')
const apiURL= 'https://jsonplaceholder.typicode.com/posts'
const req = https.request(apiURL, (res)=>{
    let myRes = ''
    res.on('data', (mydata)=>{
        // console.log(mydata)
         myRes+=mydata.toString()
        //  console.log(myRes)
    })
    res.on('end', ()=>{
        console.log(JSON.parse(myRes))
    })
})
req.on('error', (err)=>{ console.log(`fe error ${err}`)})
req.end()


