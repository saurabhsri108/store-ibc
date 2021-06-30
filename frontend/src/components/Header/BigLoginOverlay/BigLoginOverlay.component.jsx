import {
  LoginNav,
  LoginNavlist,
  LoginNavLink,
  LoginSignUp,
} from "./BigLoginOverlay.styles";
import {
  FaHeart,
  FaWallet,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";

const BigLoginOverlay = ({ isBigLoginOpen, toggleIsBigLoginOpen }) => {
  return (
    <LoginNav isBigLoginOpen={isBigLoginOpen}>
      <LoginNavlist>
        <li>
          <LoginNavLink to="/orders">
            <FaWallet />
            My Orders
          </LoginNavLink>
        </li>
        <li>
          <LoginNavLink to="/">
            <FaShoppingCart /> My Cart
          </LoginNavLink>
        </li>
        <li>
          <LoginNavLink to="/">
            <FaHeart />
            My Wishlist
          </LoginNavLink>
        </li>
        <li>
          <LoginNavLink to="/">
            <FaUserCircle />
            My Account
          </LoginNavLink>
        </li>
        <li>
          <LoginSignUp to="/">Sign Up</LoginSignUp>
        </li>
      </LoginNavlist>
    </LoginNav>
  );
};

export default BigLoginOverlay;
