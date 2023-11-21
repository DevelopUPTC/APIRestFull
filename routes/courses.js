const routes = require('express').Router()

const {
    findAll,
    findById,
    save,
    update
} = require ('./../controllers/courses')

routes.get("/",findAll)

routes.get("/:id",findById)

routes.post("/",save)

routes.put("/:id",update)

module.exports = routes;