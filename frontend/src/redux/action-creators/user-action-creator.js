import axios from "../../helpers/axios"
import * as actions from "../actions/user-constants.js"

export const userLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: actions.USER_LOGIN_REQUEST })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.post(
      "/api/v1/users/login",
      { email, password },
      config
    )

    dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: actions.USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const userRegister =
  (
    username,
    email,
    password,
    imageUrl = "",
    name = "",
    givenName = "",
    familyName = ""
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: actions.USER_REGISTER_REQUEST })
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      const { data } = await axios.post(
        "/api/v1/users/add",
        { username, email, password, imageUrl, name, givenName, familyName },
        config
      )

      dispatch({ type: actions.USER_REGISTER_SUCCESS, payload: data })

      dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data })

      localStorage.setItem("userInfo", JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: actions.USER_REGISTER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const userLogout = () => (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({ type: actions.USER_LOGOUT })
}
