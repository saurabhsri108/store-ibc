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

      // dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: data })
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

export const userVerify = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.USER_VERIFY_REQUEST })

    const { data } = await axios.post(`/api/v1/users/verify/${id}`)

    dispatch({ type: actions.USER_VERIFY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: actions.USER_VERIFY_FAILURE,
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

export const getProfile = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.USER_DETAILS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/v1/users/${id}`, config)
    dispatch({ type: actions.USER_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: actions.USER_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateProfile = (id, formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.USER_UPDATE_REQUEST })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    }
    const { data } = await axios.put(`/api/v1/users/${id}`, formData, config)
    console.log(data)
    dispatch({ type: actions.USER_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: actions.USER_UPDATE_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const resetPassword =
  (id, { oldPassword, newPassword }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: actions.USER_UPDATE_REQUEST })
      const {
        userLogin: { userInfo },
      } = getState()
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      const {
        data: { hasPassed },
      } = await axios.post(
        "/api/v1/users/check",
        { email: userInfo.email, oldPassword },
        config
      )

      if (hasPassed) {
        const { data } = await axios.put(
          `/api/v1/users/${id}`,
          { id: userInfo.id, password: newPassword },
          config
        )
        dispatch({ type: actions.USER_UPDATE_SUCCESS, payload: data })
      }
    } catch (error) {
      dispatch({
        type: actions.USER_UPDATE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
