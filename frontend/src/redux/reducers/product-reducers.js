import * as actions from "../actions/product-contants"

export const productsListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actions.PRODUCTS_LIST_REQUEST:
      return { loadingProducts: true, products: [] }
    case actions.PRODUCTS_LIST_SUCCESS:
      return { loadingProducts: false, products: action.payload }
    case actions.PRODUCTS_LIST_FAIL:
      return { loadingProducts: false, errorProducts: action.payload }
    default:
      return state
  }
}

export const productDetailsReducer = (
  state = { product: { images: [], reviews: [] } },
  action
) => {
  switch (action.type) {
    case actions.PRODUCT_DETAILS_REQUEST:
      return { loadingProduct: true, ...state }
    case actions.PRODUCT_DETAILS_SUCCESS:
      return { loadingProduct: false, product: action.payload }
    case actions.PRODUCT_DETAILS_FAIL:
      return { loadingProduct: false, errorProduct: action.payload }
    default:
      return state
  }
}
