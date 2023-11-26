const Student = require('./../models/model-students')

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
    const student = new Student(req.body)
    try {
      console.log(`id=${id} student=${student}`)

      return res.status(200).json({"state":true,data:student})
    } catch (error) {
      return res.status(500).json({"state":false,"error":error})
    }
  }
}