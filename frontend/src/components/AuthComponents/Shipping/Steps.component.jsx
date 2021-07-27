import { ShippingCard, ShippingLink } from "./Shipping.styles";

const Steps = ({ pathname }) => {
  return (
    <ShippingCard>
      <ShippingLink
        to="/auth/shipping"
        className={pathname === "/auth/shipping" ? "active" : ""}
      >
        Shipping Address
      </ShippingLink>
      <ShippingLink
        to="/auth/payment-option"
        className={pathname === "/auth/payment-option" ? "active" : ""}
      >
        Payment Option
      </ShippingLink>
      <ShippingLink
        to="/auth/order-summary"
        className={pathname === "/auth/order-summary" ? "active" : ""}
      >
        Order Summary
      </ShippingLink>
    </ShippingCard>
  );
};

export default Steps;
