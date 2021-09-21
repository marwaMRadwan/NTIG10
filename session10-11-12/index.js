const app = require('./src/app')
const PORT = process.env.PORT || 3000
// const jwt = require('jsonwebtoken')
// token = jwt.sign({data:1}, 'txt')
// console.log(token)
// console.log(jwt.verify(token, 'txt'))
app.listen( PORT , ()=> console.log(`app on localhost:${PORT}`))