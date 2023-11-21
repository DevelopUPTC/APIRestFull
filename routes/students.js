const routes = require('express').Router()

routes.get("/",(req,res)=>res.send("Hello Worlds Students!!"))

module.exports = routes;