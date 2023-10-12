// DEPENDENCIES
require('dotenv').config()
require('./config/db.connection')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const productRouter = require('./routes/product-router')

// CONFIGURATION
const app = express()
const { PORT } = process.env

// MIDDLEWARE
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// ROUTER MIDDLEWARE
app.use('/product', productRouter)


// HOME ROUTE
app.get('/', (req, res)=>{res.send('Hello You Filthy Animal')})

// SERVER LISTENER
app.listen(PORT, ()=> console.log(`Listening on PORT: ${PORT}`))
