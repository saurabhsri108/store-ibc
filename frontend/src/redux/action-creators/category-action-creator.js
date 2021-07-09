import axios from "axios"
import * as actions from "../actions/category-constants"

export const getCategoriesList = () => async (dispatch) => {
  try {
    dispatch({ type: actions.CATEGORIES_LIST_REQUEST })
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    )
    dispatch({ type: actions.CATEGORIES_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: actions.CATEGORIES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
