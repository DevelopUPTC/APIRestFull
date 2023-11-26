const mongoose = require('mongoose')

const {Schema} = mongoose

const SchemaCourse = new Schema({
  id : {
    type : Number,
    required : true,
    unique : true
  },
  name : {
    type : String,
    required : true,
  },
  credits :{
    type : Number,
    required : true
  },

  students : [
    {
      type : Schema.Types.ObjectId,
      ref : 'student'
    }
  ]
})

//course (singular) especifica el nombre de la colección, que en la BD será en plural
module.exports = mongoose.model('course',SchemaCourse)