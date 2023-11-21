module.exports = {
    findAll : async(req,res) => {
        try {
            const data = [{"id":23,"name":"Lola"},{"id":6446,"name":"Virgilio"}]
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },

    findById : async(req,res) => {
        const {id} = req.params
        console.log(`Id=${id}`)
        try {
            
            return res.status(200).json({"state":true,"data":id})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    },

    save : async (req,res)=>{
        const {id,name,credits} = req.body
        const data = {"idCouse":id,"nameCourse":name,"credits":credits+1}
    
        try {
            return res.status(200).json({"state":true,"data":data})        
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    }
}