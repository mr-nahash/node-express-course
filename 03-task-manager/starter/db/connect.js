const mongoose = require('mongoose')

const connectDB=(url)=>{
return mongoose.connect(url, {
    // to remove warning when connecting to database
    useNewUrlParser : true,
    useCreateIndex: true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
}
module.exports=connectDB
