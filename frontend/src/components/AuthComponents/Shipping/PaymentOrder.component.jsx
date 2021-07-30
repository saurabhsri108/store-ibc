import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loading/Loading.component";
import { Link } from "react-router-dom";
import {
  CartCard,
  CartFinalItem,
  CartFinalRow,
  CartHeading,
  CartItemAction,
} from "../../Cart/Cart.styles";
import {
  PlaceOrderContainer,
  PlaceOrderMain,
  ShippingContainer,
} from "./Shipping.styles";
import {
  getOrderDetails,
  payOrderPaypal,
  payOrderStripe,
} from "../../../redux/action-creators/order-action-creator";
import Message from "../../Messages/Message.component";
import { useEffect } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import StripeCheckout from "react-stripe-checkout";
import { PAY_ORDER_RESET } from "../../../redux/actions/order-constants";
import { Button } from "../../FormComponents";

const PaymentOrder = ({ history, location, match }) => {
  const { loading, error, order } = useSelector((state) => state.orderDetails);
  const { loading: loadingPay, success: successPay } = useSelector(
    (state) => state.orderPaid
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (!order || successPay) {
      dispatch({ type: PAY_ORDER_RESET });
      dispatch(getOrderDetails(match.params.id));
    }
  }, [match, dispatch, order, successPay]);

  if (loading) return <Loader />;
  if (error)
    return (
      <Message variant="error" margin="2rem auto" width="100%">
        {error}
      </Message>
    );

  const stripePaymentHandler = async (token) => {
    dispatch(
      payOrderStripe(
        { id: order._id, amount: order.totalPrice.toFixed(2) },
        token
      )
    );
  };

  const paypalPaymentHandler = (paymentResult) => {
    dispatch(payOrderPaypal(order._id, paymentResult));
  };
  return (
    <ShippingContainer>
      <PlaceOrderMain>
        <PlaceOrderContainer className="w8">
          <div className="main-items">
            <h2>Shipping Address</h2>
            <p>
              <strong>Name: </strong> {order.user.name}
            </p>
            <p>
              <strong>Email: </strong> {order.user.email}
            </p>
            <p>
              <strong>Address: </strong>
              {order.shippingAddress.address}, {order.shippingAddress.street},{" "}
              {order.shippingAddress.city}, {order.shippingAddress.state},{" "}
              {order.shippingAddress.pincode}, {order.shippingAddress.country}
            </p>
            {order.isDelivered ? (
              <Message variant="success" width="80%" margin="1rem auto 2rem 0">
                Order Delivered
              </Message>
            ) : (
              <Message variant="error" width="80%" margin="1rem auto 2rem 0">
                Order Not Delivered
              </Message>
            )}
          </div>
          <div className="main-items">
            <h2>Payment Option</h2>
            <p>
              {order.paymentMethod?.split("")[0]?.toUpperCase() +
                order.paymentMethod?.slice(1)}
            </p>
            {order.isPaid ? (
              <Message variant="success" width="80%" margin="1rem auto 2rem 0">
                Payment Received | Paid at {order.paidAt}
              </Message>
            ) : (
              <Message variant="error" width="80%" margin="1rem auto 2rem 0">
                Payment Pending
              </Message>
            )}
          </div>
          <div className="main-items">
            <h2>Order Items</h2>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {order.orderItems?.length !== 0 &&
                  order.orderItems?.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td>
                          <Link
                            to={`/products/${item._id}`}
                            style={{ color: "var(--color-black-60)" }}
                          >
                            <img src={item.image} alt={item.name} width="28" />
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/products/${item.product}`}
                            style={{ color: "var(--color-black-60)" }}
                          >
                            {item.name}
                          </Link>
                        </td>
                        <td>
                          {item.qty} x ${item.price} = $
                          {(item.qty * item.price).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </PlaceOrderContainer>

        <PlaceOrderContainer className="w4">
          <CartHeading>Order Summary</CartHeading>
          <CartCard>
            <CartFinalRow>
              <CartFinalItem>
                Price ({order.orderItems?.length} items)
              </CartFinalItem>
              <CartFinalItem>${order.itemsPrice}</CartFinalItem>
            </CartFinalRow>
            <CartFinalRow>
              <CartFinalItem>Delivery Charges</CartFinalItem>
              <CartFinalItem>{order.shippingPrice}</CartFinalItem>
            </CartFinalRow>
            <CartFinalRow>
              <CartFinalItem>Final Price</CartFinalItem>
              <CartFinalItem>${order.totalPrice}</CartFinalItem>
            </CartFinalRow>
          </CartCard>
          <CartItemAction className="cart-checkout">
            {order.paymentMethod.toLowerCase() === "paypal" && !order.isPaid && (
              <>
                <PayPalButton
                  amount={order.totalPrice}
                  onSuccess={paypalPaymentHandler}
                  options={{
                    clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID_US,
                    currency: "USD",
                  }}
                />
                {loadingPay && <Loader height="auto" />}
              </>
            )}
            {order.paymentMethod.toLowerCase() === "stripe" && !order.isPaid && (
              <>
                <StripeCheckout
                  token={stripePaymentHandler}
                  stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY_TEST}
                  name="Pay Using Stripe"
                  amount={order.totalPrice * 100}
                >
                  <Button style={{ width: "100%" }}>Pay using stripe</Button>
                </StripeCheckout>
                {loadingPay && <Loader height="auto" />}
              </>
            )}
            {order.paymentMethod.toLowerCase() === "razorpay" && !order.isPaid && (
              <>
                <div className="stripe-payment">RazorPay Payment</div>
                {loadingPay && <Loader height="auto" />}
              </>
            )}
            {order.paymentMethod.toLowerCase() === "googlepay" &&
              !order.isPaid && (
                <>
                  <div className="stripe-payment">GooglePay Payment</div>
                  {loadingPay && <Loader height="auto" />}
                </>
              )}
          </CartItemAction>
        </PlaceOrderContainer>
      </PlaceOrderMain>
    </ShippingContainer>
  );
};

export default PaymentOrder;
