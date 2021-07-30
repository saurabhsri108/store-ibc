import React from "react";
import { useSelector } from "react-redux";
import { CartContainer } from "../../Cart/Cart.styles";
import NoCartItem from "../../Cart/NoCartItem.component";
import OrderListings from "../../OrderListings/OrderListings.component";

const OrdersSection = () => {
  const { order } = useSelector((state) => state.orderDetails);
  return (
    <CartContainer
      style={{ width: "100%", gridTemplateColumns: "1fr" }}
    ></CartContainer>
  );
};

export default OrdersSection;
