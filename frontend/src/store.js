//! need to update createStore from 'redux' to {createSlice, configureStore} from '@reduxjs/toolkit'
//! npm install @reduxjs/toolkit
//! https://redux.js.org/introduction/why-rtk-is-redux-today

import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { productListReducer, productDetailsReducer } from './reducers/productReducers'

import { cartReducer } from './reducers/cartReducers'

// this is a list of reducers, which of which will have its own function
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []


// this is the initial state (which is a argument that createStore() takes in...)
// if we want something to be loaded when redux store loads, then we can put that in here
const initialState = {}

// this allows us to apply middleware which will be thunk
const middleware = [thunk]

// this is a redux function that creates a store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
