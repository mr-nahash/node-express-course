const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  //specify 2 properties name and completed
  // only the prooperties specified in the schema will be passed into the database
  name: 
  {
    //validation to prevent empty entries
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: 
  {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
