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
    const products = await Product.find({})

    res.json(products)
  })
)

// @desc      fetch single products
// @route     GET api/products/:id
// @access    Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

export default router
