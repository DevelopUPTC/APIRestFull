const mongoose = require('mongoose')

const {Schema} = mongoose

const SchemaStudent = new Schema({
  id : {
    type : Number,
    required : true,
    unique : true
  },
  name :{
    type : String,
    required : true
  },
  birthday : {
    type : Date,
    required : false
  },
  gender :{
    type : Boolean,
    required : true
  },

  course : {
    type : Schema.Types.ObjectId,
    ref : 'course'
  }
})

module.exports = mongoose.model('student',SchemaStudent)