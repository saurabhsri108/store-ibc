import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  PAY_ORDER_REQUEST,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAILED,
  PAY_ORDER_RESET,
} from "../actions/order-constants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return { loading: true };
    case PLACE_ORDER_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case PLACE_ORDER_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
      return { ...state, loading: true };
    case GET_ORDER_SUCCESS:
      return { loading: false, order: action.payload };
    case GET_ORDER_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderPaidReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_ORDER_REQUEST:
      return { loading: true };
    case PAY_ORDER_SUCCESS:
      return { loading: false, success: true };
    case PAY_ORDER_FAILED:
      return { loading: false, error: action.payload };
    case PAY_ORDER_RESET:
      return {};
    default:
      return state;
  }
};
