const Student = require('./../models/model-students')
const Course = require('./../models/model-courses')

module.exports = {
  findAll : async(req,res)=>{
    try {
      const data = await Student.find({})

      return res.status(200).json({"state":true,"data":data})
    } catch (error) {
      return res.status(500).json({"state":false,"error":error})
    }
  },

  save : async(req,res)=>{
    const {id} = req.params;
    const course = await Course.findById(id)
    if (course){
      try {
        const student = new Student(req.body)
        
        student.course = course

        const result = await student.save()

        course.students.push(student)

        await course.save()

        return res.status(200).json({"state":true,data:result})
      } catch (error) {
        return res.status(500).json({"state":false,"error":error})
      }
    }else{
        return res.status(200).json({"state":false,"error":"Curso No Existe"})
    }  
  }
}