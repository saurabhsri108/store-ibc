import React from "react";
import { useSelector } from "react-redux";
import { CartContainer } from "../../Cart/Cart.styles";
import CartItems from "../../Cart/CartItems.component";
import NoCartItem from "../../Cart/NoCartItem.component";

const OrdersSection = () => {
  const { order } = useSelector((state) => state.orderCreate);
  console.log(order);
  return (
    <CartContainer style={{ width: "100%", gridTemplateColumns: "1fr" }}>
      {order?.length !== 0 && <CartItems items={order} />}
      {order?.length === 0 && <NoCartItem title="No orders till date" />}
    </CartContainer>
  );
};

export default OrdersSection;
