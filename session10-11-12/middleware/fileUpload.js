const multer = require('multer')
const path = require('path')
fs = require('fs')
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const location = path.join('images', req.user._id.toString()) //images/1
        fs.mkdir(location, (err)=>{})
        cb(null,  location)
    },
    filename : function(req, file, cb){
        const myFileName = file.fieldname+"-"+Date.now()+ path.extname(file.originalname)
        cb(null, myFileName)
    }
})
const upload = multer({
    storage: storage,
    limits:{fileSize: 200000000},
    // fileFilter: function(req, file, cb){
    //     if( path.extname(file.originalname) != '.pdf' ) return cb(new Error('invalid ext'))
    //     cb(null, true)
    // }
})
module.exports = upload
