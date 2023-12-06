const Course = require('./../models/model-courses')

module.exports = {
    findAll : async(req,res) => {
        try {
            const data = await Course.find({})

            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },

    findById : async(req,res) => {
        const {id} = req.params
        try {
            const data = await Course.findById(id).populate('students')
            
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },

    save : async (req,res)=>{
        const course = new Course(req.body)
    
        try {
            const data = await course.save()

            return res.status(200).json({"state":true, "data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },

    update : async(req,res)=>{
        try {
            return res.status(200).json({"state":true,"data":null})    
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    }
}