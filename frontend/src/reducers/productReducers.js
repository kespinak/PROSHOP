import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

// this is our first reducer. a reducer is a function takes in a state and a action which is the actual execution of the function aka the main function/functionality aka the function of a function
// productListReducer will handle the listing of products in our state
// in the homescreen component we will call productList from store.js which calls productListReducer which calls productAction
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) { // The 3 actions types are: PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
