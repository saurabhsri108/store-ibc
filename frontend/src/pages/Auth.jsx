import SignInForm from "../components/AuthComponents/SignInForm/SignInForm.component";
import SignUpForm from "../components/AuthComponents/SignUpForm/SignUpForm";
import ForgotPassword from "../components/AuthComponents/ForgotPassword/ForgotPassword.component";
import Verification from "../components/AuthComponents/Verification/Verification.component";
import Shipping from "../components/AuthComponents/Shipping/Shipping.component";
import OrderSummary from "../components/AuthComponents/Shipping/OrderSummary.component";
import PaymentOption from "../components/AuthComponents/Shipping/PaymentOption.component";

const Auth = ({
  history,
  location,
  match: {
    params: { option, token },
  },
}) => {
  if (option === "shipping")
    return <Shipping history={history} location={location} />;

  if (option === "payment-option")
    return <PaymentOption history={history} location={location} />;

  if (option === "order-summary")
    return <OrderSummary history={history} location={location} />;

  if (option === "sign-in")
    return <SignInForm history={history} location={location} />;

  if (option === "sign-up")
    return <SignUpForm history={history} location={location} />;

  if (option === "forgot-password")
    return <ForgotPassword history={history} location={location} />;

  if (option === "confirmation")
    return <Verification history={history} location={location} token={token} />;

  return null;
};

export default Auth;
