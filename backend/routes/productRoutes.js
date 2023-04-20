import express from 'express'

import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const router = express.Router()

// @desc      fetch all products
// @route      GET api/products
// @access    Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    //(all mongoose methods returns a promise...so we will use async await + try catch or express-async-handler instead of try catch)
    const products = await Product.find({}) // productModel.mongooseFind
    // res.status(401) // this is an example of an error
    // throw new Error('Not Authorized')

    res.json(products)
  })
)

// @desc      fetch single products
// @route     GET api/products/:id
// @access    Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id) // productModel.mongooseFindbyId.(request.expressParams.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
)

export default router
