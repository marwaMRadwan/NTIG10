const yargs = require('yargs')
const tasks = require('./tasks')
//title, content, duedate
yargs.command({
    command:'add',
    describe:"add new task with title, content, end date",
    builder:{
        id:{
            type:Number,
            default:parseInt((Date.now()) * Math.random())
        },         
        title:{
            type:String,
            demandOption: true
        },
        content:{
            type:String,
            demandOption:true
        },
        dueDate:{
            type:Date,
            demandOption:true
        }
    },
    handler: function(argv){
        let task = {id:argv.id, title:argv.title,content:argv.content, dueDate:argv.dueDate}
        tasks.addTask(task)
    }
})

yargs.command({
    command:"showAll",
    handler: function(){
        tasks.showAll()
    }
})

yargs.command({
    command:"editTask",
    builder:{
        taskId: {demandOption:true, type:Number},
        title:{
            type:String,
        },
        content:{
            type:String,
        },
        dueDate:{
            type:Date,
        },
        status:{
            type:Boolean
        }
    },
    handler:function(argv){
        let newData = {}
        heads = ['title', 'content', 'status','dueDate']
        heads.forEach(h=>{
         if(argv[h]) newData[h]=argv[h]
        })
        // if(argv.title) newData.title=argv.title
        // if(argv.content) newData.content=argv.content
        // if(argv.status) newData.status=argv.status
        // if(argv.dueDate) newData.dueDate=argv.dueDate
        console.log(newData)
        tasks.editTask(argv.taskId, newData)
    }
})

yargs.command({
    command:"delTask",
    builder:{
        taskId:{demandOption:true, type:Number}
    },
    handler: function(argv){
        tasks.deleteTask(argv.taskId)
    }
})

yargs.argv