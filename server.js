const express = require('express')

const app = express()

//connect-DB
require('./drivers/connect-db')

//setters
app.set('PORT',process.env.PORT || 3000 )

//middlewares
app.use(express.json())

app.use("/courses", require('./routes/courses'))
app.use("/students", require('./routes/students'))

app.listen(app.get('PORT'),()=>console.log(`Sever Listen to Port ${app.get('PORT')}`))