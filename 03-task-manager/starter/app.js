const express = require('express')
//the app is the local server
const app = express();
// for setting up the middle ware
const tasks = require('./routes/tasks')
const connectDB = require("./db/connect")
//requiere the dotenv package
require('dotenv').config()

//middleware
app.use(express.json())


// routes 
    //the path will be hello and then (req,res) is the callback function
app.get('/hello', (req, res) => {
    // " task manager app" will be display on localhost:3000/hello
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

    // app.get(/api/v1/tasks)          - get all the tasks
    // app.post('api/v1/tasks')        - create a new task
    // app.get('/api/v1/tasks/id:')    - get single task
    // app.patch('/api/v1/tasks/id:')  - update task
    // app.delete('/api/v1/tasks/id:') - delete task


const port = 3000

//async operation
const start = async()=>
    {
        try{
            await connectDB(process.env.MONGO_URI)
            app.listen(port,console.log('server is listening on port',port,'...'))
        }catch(error) {
            console.log(error)
        }
    }
start()
    

