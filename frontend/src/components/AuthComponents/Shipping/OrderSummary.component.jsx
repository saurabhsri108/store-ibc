import { Button, ButtonLink } from "../../FormComponents";
import { LinkContainer, ShippingContainer } from "./Shipping.styles";
import Steps from "./Steps.component";

const OrderSummary = ({ history, location }) => {
  return (
    <ShippingContainer>
      <Steps pathname={location.pathname} />

      {/* Shipping Address */}
      {/* Order Items */}
      {/* Payment Option */}

      {/* Order total */}
      {/* Place order button */}
      <LinkContainer>
        <ButtonLink to="payment-option">Go Back</ButtonLink>
        <Button to="order-summary">Place Order</Button>
      </LinkContainer>
    </ShippingContainer>
  );
};

export default OrderSummary;
