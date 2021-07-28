import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loading/Loading.component";
import { Link } from "react-router-dom";
import {
  CartCard,
  CartFinalItem,
  CartFinalRow,
  CartHeading,
  CartItemAction,
  CartItemButton,
} from "../../Cart/Cart.styles";
import {
  PlaceOrderContainer,
  PlaceOrderMain,
  ShippingContainer,
} from "./Shipping.styles";
import {
  getOrderDetails,
  payOrder,
} from "../../../redux/action-creators/order-action-creator";
import Message from "../../Messages/Message.component";
import { useEffect } from "react";

const PaymentOrder = ({ history, location, match }) => {
  const { loading, error, order } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderDetails(match.params.id));
  }, [match, dispatch]);

  if (loading) return <Loader />;
  if (error)
    return (
      <Message variant="error" margin="2rem auto" width="100%">
        {error}
      </Message>
    );

  const paymentHandler = (orderTotal) => {
    console.log(orderTotal);
    const paymentResult = {
      id: 1,
      status: "paid",
      update_time: Date.now(),
      payer: {
        email_address: "vasudeveloper001@gmail.com",
      },
    };

    dispatch(payOrder(order._id, paymentResult));
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
                            to={`/products/${item._id}`}
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
            <CartItemButton
              fs="1.2rem"
              sm={1}
              onClick={() => paymentHandler(order.totalPrice)}
              id="place-order-btn"
            >
              Pay Using {order.paymentMethod}
            </CartItemButton>
          </CartItemAction>
        </PlaceOrderContainer>
      </PlaceOrderMain>
    </ShippingContainer>
  );
};

export default PaymentOrder;
