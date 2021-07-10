import axios from "axios"
import * as actions from "../actions/product-contants"
import { API_URL } from "../../currentEnv"

export const getProductsList = () => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCTS_LIST_REQUEST })
    const { data } = await axios.get(`${API_URL}/api/v1/products`)
    dispatch({ type: actions.PRODUCTS_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: actions.PRODUCTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`${API_URL}/api/v1/products/${id}`)
    dispatch({ type: actions.PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: actions.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
