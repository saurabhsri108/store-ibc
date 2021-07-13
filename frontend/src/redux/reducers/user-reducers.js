import * as actions from "../actions/user-constants"

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_REQUEST:
      return { loadingUser: true }
    case actions.USER_LOGIN_SUCCESS:
      return { loadingUser: false, userInfo: action.payload }
    case actions.USER_LOGIN_FAILURE:
      return { loadingUser: false, error: action.payload }
    case actions.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_REGISTER_REQUEST:
      return { loadingUser: true }
    case actions.USER_REGISTER_SUCCESS:
      return { loadingUser: false, userInfo: action.payload }
    case actions.USER_REGISTER_FAILURE:
      return { loadingUser: false, error: action.payload }
    case actions.USER_LOGOUT:
      return {}
    default:
      return state
  }
}
