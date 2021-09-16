const express = require("express")
const app = express()

const userRoutes = require('../routes/user.routes')

require('dotenv').config()
require('../db/connection')

app.use(express.json())
app.use(userRoutes)

module.exports = app