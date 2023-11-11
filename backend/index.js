const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandeler} = require("./middelware/errorMiddelware")
const connectDB = require("./config/db")
const colors = require("colors")
const port =  process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/items', require('./routes/itemRoutes'))
app.use(errorHandeler)
app.listen(port, () => console.log(`server started on port ${port}`))