const express = require('express')
const cors = require('cors')
const multer = require('multer')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
app.use(cors())
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

let storage = multer.diskStorage({
    destination: function(req,file, cb){ cb(null, 'images')},
    filename:function(req,file,cb){cb(null, file.originalname)}
})
upload = multer({storage})
app.post('/uploadImg', upload.single('img'), (req, res, next)=>{
    const file = req.file
    res.send(file)
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})