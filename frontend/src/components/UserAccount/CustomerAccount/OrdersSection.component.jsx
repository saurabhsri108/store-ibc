import React from "react";
import { useSelector } from "react-redux";
import { CartContainer } from "../../Cart/Cart.styles";
import NoCartItem from "../../Cart/NoCartItem.component";

const OrdersSection = () => {
  const { order } = useSelector((state) => state.orderDetails);
  console.log(order);
  return (
    <CartContainer style={{ width: "100%", gridTemplateColumns: "1fr" }}>
      {order?.length === 0 && <NoCartItem title="No orders till date" />}
    </CartContainer>
  );
};

export default OrdersSection;
