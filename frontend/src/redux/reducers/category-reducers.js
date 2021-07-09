import * as actions from "../actions/category-constants"

export const categoriesListReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case actions.CATEGORIES_LIST_REQUEST:
      return { loadingCategories: true, categories: [] }
    case actions.CATEGORIES_LIST_SUCCESS:
      console.log(action.payload)
      return { loadingCategories: false, categories: action.payload }
    case actions.CATEGORIES_LIST_FAIL:
      return { loadingCategories: false, error: action.payload }
    default:
      return state
  }
}
