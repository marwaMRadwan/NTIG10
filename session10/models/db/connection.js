const mongoose = require('mongoose')

try{
    mongoose.connect(process.env.DB)
}
catch(e){
    console.log(e)
}