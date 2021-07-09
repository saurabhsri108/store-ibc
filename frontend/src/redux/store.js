import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  productsListReducer,
  productDetailsReducer,
} from "./reducers/product-reducers"
import { categoriesListReducer } from "./reducers/category-reducers"

const reducer = combineReducers({
  productsList: productsListReducer,
  productDetails: productDetailsReducer,
  categoriesList: categoriesListReducer,
})
const initialState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
