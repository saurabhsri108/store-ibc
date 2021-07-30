import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../../../redux/action-creators/cart-action-creator";
import {
  Button,
  ButtonLink,
  Form,
  InputGroup,
  InputRadio,
} from "../../FormComponents";
import { LinkContainer, ShippingContainer } from "./Shipping.styles";
import Steps from "./Steps.component";

const PaymentOption = ({ history, location }) => {
  const { paymentMethod } = useSelector((state) => state.cartItems);

  const [currentPaymentMethod, setPaymentMethod] = useState(paymentMethod);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(currentPaymentMethod));
    history.push("order-summary");
  };
  return (
    <ShippingContainer>
      <Steps pathname={location.pathname} />
      <Form onSubmit={submitHandler}>
        <InputGroup>
          <InputRadio
            name="paymentMethod"
            id="paypal"
            value="paypal"
            checked={currentPaymentMethod === "paypal" ? true : false}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            PayPal or Credit Card
          </InputRadio>
        </InputGroup>
        <InputGroup>
          <InputRadio
            name="paymentMethod"
            id="stripe"
            checked={currentPaymentMethod === "stripe" ? true : false}
            value="stripe"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            Stripe
          </InputRadio>
        </InputGroup>
        {/* <InputGroup>
          <InputRadio
            name="paymentMethod"
            id="razorpay"
            checked={currentPaymentMethod === "razorpay" ? true : false}
            value="razorpay"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            RazorPay
          </InputRadio>
        </InputGroup>
        <InputGroup>
          <InputRadio
            name="paymentMethod"
            id="googlepay"
            checked={currentPaymentMethod === "googlepay" ? true : false}
            value="googlepay"
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            GooglePay
          </InputRadio>
        </InputGroup> */}
        <LinkContainer>
          <ButtonLink to="shipping">Go Back</ButtonLink>
          <Button type="submit">Continue</Button>
        </LinkContainer>
      </Form>
    </ShippingContainer>
  );
};

export default PaymentOption;
