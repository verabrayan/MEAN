const express = require('express');
const app = express();
const empleadoRouter = require('./routes/empleado.router')
const {connection} = require('./database')
//settings
app.set('port',process.env.PORT || 2000)

//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//connection db
//connection().catch(err => console.log(err))

//Routes
app.use('/empleados',empleadoRouter)

module.exports = app