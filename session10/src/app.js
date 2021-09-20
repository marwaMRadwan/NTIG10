const express = require('express')
const app = express()
//const app = require('express')()

require('dotenv').config()
require('../models/db/connection')
const userRoutes = require('../routes/user.routes')
const postRoutes = require('../routes/post.routes')

const cors = require('cors')
app.use(cors())

app.use( express.urlencoded( { extended : true } ) )
app.use( express.json() )

app.use('/user', userRoutes )
app.use('/post', postRoutes)
module.exports = app