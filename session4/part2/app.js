// __dirname   __filename
// console.log(process.argv[2]);
// let x = 5,y=10
// if(process.argv[2]=='+') console.log(x+y)
// else console.log(x-y)

const yargs = require('yargs')
const student = require('./students')
yargs.command({
    command : 'add',
    describe:"add new student",
    builder:{
        name:{
            type:String
        },
        className:{
            type:Number
        }
    },
    handler : function(argv){
        student.addStudent(argv.name, argv.className)
    }
})


yargs.argv