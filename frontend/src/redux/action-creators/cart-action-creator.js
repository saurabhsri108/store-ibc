import * as actions from "../actions/cart-constants";

export const addToCart =
  (product, qty = 1) =>
  async (dispatch, getState) => {
    try {
      const image = product.images ? product.images[0] : product.image;
      const cartItem = {
        id: product._id,
        title: product.title,
        price: product.price,
        countInStock: product.countInStock,
        image: image,
        qty: qty,
      };
      dispatch({ type: actions.CART_ADD_ITEM, payload: cartItem });

      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartItems.cartItems)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

export const removeFromCart = (itemId) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.CART_REMOVE_ITEM, payload: itemId });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cartItems.cartItems)
    );
  } catch (error) {
    console.error(error.message);
  }
};

export const addToLater = (product) => async (dispatch, getState) => {
  try {
    // console.log(product)
    // return false
    const image = product.images ? product.images[0] : product.image;
    const laterItem = {
      id: product._id,
      title: product.title,
      price: product.price,
      countInStock: product.countInStock,
      image: image,
    };
    dispatch({ type: actions.CART_ADD_SAVE_ITEM, payload: laterItem });
    localStorage.setItem(
      "savedCartItems",
      JSON.stringify(getState().savedCartItems.savedCartItems)
    );
  } catch (error) {
    console.error(error.message);
  }
};

export const removeFromLater = (itemId) => async (dispatch, getState) => {
  try {
    dispatch({ type: actions.CART_REMOVE_SAVE_ITEM, payload: itemId });
    localStorage.setItem(
      "savedCartItems",
      JSON.stringify(getState().savedCartItems.savedCartItems)
    );
  } catch (error) {
    console.error(error.message);
  }
};

export const saveShippingAddress = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actions.SHIPPING_ADDRESS_SAVE, payload: formData });
    localStorage.setItem("shipping-address", JSON.stringify(formData));
  } catch (error) {
    console.log(error.message);
  }
};

export const savePaymentMethod = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actions.SAVE_PAYMENT_METHOD, payload: formData });
    localStorage.setItem("payment-method", JSON.stringify(formData));
  } catch (error) {
    console.log(error.message);
  }
};
