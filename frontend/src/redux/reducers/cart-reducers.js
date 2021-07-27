import * as actions from "../actions/cart-constants";

export const cartItemsReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case actions.CART_ADD_ITEM:
      const itemId = action.payload.id;
      const itemExists = state.cartItems.find((p) => p.id === itemId);
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((p) =>
            p.id === itemExists.id ? action.payload : p
          ),
        };
      } else {
        return { ...state, cartItems: [action.payload, ...state.cartItems] };
      }
    case actions.CART_REMOVE_ITEM:
      const rItemId = action.payload;
      const filteredItems = state.cartItems.filter((p) => p.id !== rItemId);
      return { ...state, cartItems: filteredItems };

    case actions.SHIPPING_ADDRESS_SAVE:
      return { ...state, shippingAddress: action.payload };

    case actions.SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    default:
      return state;
  }
};

export const savedCartItemsReducer = (
  state = { savedCartItems: [] },
  action
) => {
  switch (action.type) {
    case actions.CART_ADD_SAVE_ITEM:
      const itemId = action.payload.id;
      const itemExists = state.savedCartItems.find((p) => p.id === itemId);
      if (itemExists) {
        return { ...state, savedCartItems: state.savedCartItems };
      } else {
        return {
          ...state,
          savedCartItems: [action.payload, ...state.savedCartItems],
        };
      }
    case actions.CART_REMOVE_SAVE_ITEM:
      const rItemId = action.payload;
      const filteredItems = state.savedCartItems.filter(
        (p) => p.id !== rItemId
      );
      return { ...state, savedCartItems: filteredItems };
    default:
      return state;
  }
};
