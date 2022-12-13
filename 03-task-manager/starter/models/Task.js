
const mongoose = require('mongoose')

//using schema we will set the structure for all the documents
const TaskSchema = new mongoose.Schema({
  name:String,completed:Boolean
  //name:
  //{
   // type: String,
    //required: [true, 'must provide name'],
    //trim: true,
    //maxlength: [20, 'name can not be more than 20 characters'],
  //},
  //completed: 
  //{
    //type: Boolean,
    //default: false,
  //},
})

// a mangoose model provides an interfase
//tasks will be pushed to the database
module.exports = mongoose.model('Task', TaskSchema)
