const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/myDb')

const MyTable = new mongoose.model('MyTable', {
    a:{
        type:String
    },
    b:{
        type:Number
    },
    c:{
        type:Boolean
    }
})
const data = new MyTable({a:"a", b:1, c:true})

data.save()
.then(()=> console.log(data))
.catch(e=> console.log(e))
