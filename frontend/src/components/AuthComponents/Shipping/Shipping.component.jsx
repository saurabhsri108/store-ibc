import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../../redux/action-creators/cart-action-creator";
import { Button, Form, InputField, Label } from "../../FormComponents";
import {
  InputGroupStyled,
  LinkContainer,
  ShippingContainer,
} from "./Shipping.styles";
import Steps from "./Steps.component";

const Shipping = ({ history, location }) => {
  const { shippingAddress } = useSelector((state) => state.cartItems);
  const [formData, setFormData] = useState({
    address: shippingAddress.address,
    street: shippingAddress.street,
    city: shippingAddress.city,
    state: shippingAddress.state,
    pincode: shippingAddress.pincode,
    country: shippingAddress.country,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(formData));
    history.push("payment-option");
  };

  return (
    <ShippingContainer>
      <Steps pathname={location.pathname} />
      <Form onSubmit={submitHandler}>
        <InputGroupStyled>
          <Label htmlFor="address">Address</Label>
          <InputField
            id="address"
            name="address"
            value={formData.address}
            onChange={(e) => handleChange(e)}
            type="text"
            required
          />
        </InputGroupStyled>
        <InputGroupStyled>
          <Label htmlFor="street">Street</Label>
          <InputField
            id="street"
            name="street"
            value={formData.street}
            onChange={(e) => handleChange(e)}
            type="text"
            required
          />
        </InputGroupStyled>
        <InputGroupStyled>
          <Label htmlFor="city">City</Label>
          <InputField
            id="city"
            name="city"
            value={formData.city}
            onChange={(e) => handleChange(e)}
            type="text"
            required
          />
        </InputGroupStyled>
        <InputGroupStyled>
          <Label htmlFor="state">State</Label>
          <InputField
            id="state"
            name="state"
            value={formData.state}
            onChange={(e) => handleChange(e)}
            type="text"
            required
          />
        </InputGroupStyled>
        <InputGroupStyled>
          <Label htmlFor="pincode">Pincode/Zipcode</Label>
          <InputField
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={(e) => handleChange(e)}
            type="text"
            required
          />
        </InputGroupStyled>
        <InputGroupStyled>
          <Label htmlFor="country">Country</Label>
          <InputField
            id="country"
            name="country"
            value={formData.country}
            onChange={(e) => handleChange(e)}
            type="text"
            required
          />
        </InputGroupStyled>
        <LinkContainer>
          <div></div>
          <Button type="submit">Continue</Button>
        </LinkContainer>
      </Form>
    </ShippingContainer>
  );
};

export default Shipping;
