import express from 'express' //
// const express = require('express') // common js vs es module
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

// import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()
const app = express()

// this is an example of middleware
app.use((req, res, next) => {
  console.log(
    'THIS IS AN EXAMPLE OF MIDDLEWARE, it will occur when you make a http request (for example using postman)'
  )
  console.log(req.originalUrl)
  next()
})

app.get('/', (req, res) => {
  res.send('API is running...')
})

//if you go to the route: http://localhost:5000/api/products it will return productRoutes from './routes/productRoutes.js
app.use('/api/products', productRoutes)

// app.get('/api/products', (req, res) => {
//   res.json(products)
// })

// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p._id === req.params.id)
//   res.json(product)
// })

//this is middleware error handler for 404 errors:
app.use(notFound)

// This code sets up an error-handling middleware function in an Express.js application. The middleware function will be called whenever there is an error thrown in any of the routes defined in the application. 
// for full understanding try chtgpt: i am new to backend development...Can you explain the following code:
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
