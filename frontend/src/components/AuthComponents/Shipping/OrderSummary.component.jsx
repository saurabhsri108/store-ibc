import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loading/Loading.component";
import { Link } from "react-router-dom";
import { gettotalPrices } from "../../../helpers/getotalPrices";
import {
  CartCard,
  CartFinalItem,
  CartFinalRow,
  CartHeading,
  CartItemAction,
  CartItemButton,
} from "../../Cart/Cart.styles";
import { ButtonLink } from "../../FormComponents";
import {
  LinkContainer,
  PlaceOrderContainer,
  PlaceOrderMain,
  ShippingContainer,
} from "./Shipping.styles";
import Steps from "./Steps.component";
import { placeOrder } from "../../../redux/action-creators/order-action-creator";
import Message from "../../Messages/Message.component";
import { useEffect } from "react";
import OrderListings from "../../OrderListings/OrderListings.component";

const OrderSummary = ({ history, location }) => {
  const { cartItems, shippingAddress, paymentMethod } = useSelector(
    (state) => state.cartItems
  );
  const items = cartItems;
  const { address, street, city, state, pincode, country } = shippingAddress;

  const { loading, error, success, order } = useSelector(
    (state) => state.orderCreate
  );

  const totalPrice = Number(
    items?.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)
  );
  const [deliveryPrice, finalPrice] = gettotalPrices(totalPrice);

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
  }, [history, success, order]);

  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    const placeOrderBtn = document.querySelector("#place-order-btn");
    placeOrderBtn.style.backgroundColor = "var(--color-black-60)";
    placeOrderBtn.style.borderColor = "var(--color-black-60)";
    placeOrderBtn.disabled = true;
    const modifiedItems = items.map((item) => {
      return {
        ...item,
        image: item.image.image,
        name: item.title,
        product: item.id,
      };
    });
    dispatch(
      placeOrder({
        orderItems: modifiedItems,
        shippingAddress: shippingAddress,
        paymentMethod: paymentMethod,
        itemsPrice: totalPrice,
        shippingPrice: deliveryPrice === "FREE" ? 0 : deliveryPrice,
        totalPrice: finalPrice,
      })
    );
  };

  return (
    <ShippingContainer>
      <Steps pathname={location.pathname} />
      <PlaceOrderMain>
        <PlaceOrderContainer className="w8">
          <div className="main-items">
            <h2>Shipping Address</h2>
            <p>
              {address}, {street}, {city}, {state}, {pincode}, {country}
            </p>
          </div>
          <div className="main-items">
            <h2>Payment Option</h2>
            <p>
              {paymentMethod.split("")[0].toUpperCase() +
                paymentMethod.slice(1)}
            </p>
          </div>
          <div className="main-items">
            <h2>Order Items</h2>
            <OrderListings items={items} />
          </div>
        </PlaceOrderContainer>

        <PlaceOrderContainer className="w4">
          <CartHeading>Order Summary</CartHeading>
          <CartCard>
            <CartFinalRow>
              <CartFinalItem>Price ({items?.length} items)</CartFinalItem>
              <CartFinalItem>${totalPrice}</CartFinalItem>
            </CartFinalRow>
            <CartFinalRow>
              <CartFinalItem>Delivery Charges</CartFinalItem>
              <CartFinalItem>${deliveryPrice}</CartFinalItem>
            </CartFinalRow>
            <CartFinalRow>
              <CartFinalItem>Final Price</CartFinalItem>
              <CartFinalItem>${finalPrice}</CartFinalItem>
            </CartFinalRow>
          </CartCard>
          <CartItemAction className="cart-checkout">
            <CartItemButton
              fs="1.2rem"
              sm={1}
              onClick={placeOrderHandler}
              id="place-order-btn"
            >
              Place Order
            </CartItemButton>
            {loading && <Loader height="auto" />}
            {error && (
              <Message variant="error" width="100%" margin="0">
                {error}
              </Message>
            )}
          </CartItemAction>
        </PlaceOrderContainer>
      </PlaceOrderMain>
      <LinkContainer>
        <ButtonLink to="payment-option">Go Back</ButtonLink>
      </LinkContainer>
    </ShippingContainer>
  );
};

export default OrderSummary;
