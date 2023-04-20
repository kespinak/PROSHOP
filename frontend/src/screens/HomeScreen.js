//! useEffect infinite loop shows on chrome console

import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.js'
// import products from '../products'

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch() // this is used to call an action

  //useSelector is used to select part of the state that you want. note that this constant has to be the same name from the reducer in store.js
  const productList = useSelector((state) => state.productList)
  //step2: extract what you want from the state
  const { loading, error, products } = productList

  //step1: fire off the action
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  //step3: display the info that you extracted using useSelector
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              {/* <h3>{product.name}</h3> */}
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
