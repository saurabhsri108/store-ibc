import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  productsListReducer,
  productDetailsReducer,
} from "./reducers/product-reducers"
import { categoriesListReducer } from "./reducers/category-reducers"
import {
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userVerifyReducer,
} from "./reducers/user-reducers"
import {
  cartItemsReducer,
  savedCartItemsReducer,
} from "./reducers/cart-reducers"

const reducer = combineReducers({
  productsList: productsListReducer,
  productDetails: productDetailsReducer,
  categoriesList: categoriesListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userVerify: userVerifyReducer,
  userProfile: userProfileReducer,
  updatedProfile: userUpdateProfileReducer,
  cartItems: cartItemsReducer,
  savedCartItems: savedCartItemsReducer,
})
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null
const savedCartItemsFromStorage = localStorage.getItem("savedCartItems")
  ? JSON.parse(localStorage.getItem("savedCartItems"))
  : []

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userRegister: { userInfo: userInfoFromStorage },
  userVerify: { isVerified: userInfoFromStorage?.verified },
  cartItems: { cartItems: cartItemsFromStorage },
  savedCartItems: { savedCartItems: savedCartItemsFromStorage },
}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
