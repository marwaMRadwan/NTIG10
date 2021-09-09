//define port
const PORT = 3000
//define node built-in packages
const path = require('path')

// define objects from packages i have installed
const express = require('express')
const hbs = require('hbs')

//define object from express
const app = express()

//define folder paths views, partials(layouts), public(static)
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../resources/views')
const partialsDir = path.join(__dirname, '../resources/layouts')

//set view engine
app.set('view engine', 'hbs')

//set and use directories
app.use(express.static(publicDir))
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)

//routes
app.get('', (req,res)=>{
    res.send('home page')
})

app.get('/single', (req,res)=>{
    res.send('single')
})

app.get('*', (req,res)=>{
    res.send('error page')
})
//listen to server
app.listen( PORT , () => console.log(`app on localhost:${PORT}`) )