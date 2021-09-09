// npm init --y
// npm i express
//npm i -g nodemon
//npm i hbs
const express = require('express')
const path = require('path')
const app = express()

const publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

app.set('view engine', 'hbs')

app.get('', (req,res)=>{
    res.render('home')
})

// app.get('', (req,res)=>{
//     let user = {name:"marwa", age:36}
//     res.send(user)
// })

// app.get('/test1', (req,res)=>{
//     res.send('test')
// })
app.listen(3000)

/* localhost:3000 */