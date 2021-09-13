const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const userRoutes = require('../routes/user.routes')

app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, "../frontend/views"))
hbs.registerPartials(path.join(__dirname, "../frontend/layouts"))

app.use(express.static(path.join(__dirname, "../public")))

app.use(express.urlencoded()) // use form data

app.use(userRoutes)

module.exports = app