const app = require('./src/app')
app.listen(process.env.PORT, ()=>{
    console.log(`on localhost:${process.env.PORT}`)
})