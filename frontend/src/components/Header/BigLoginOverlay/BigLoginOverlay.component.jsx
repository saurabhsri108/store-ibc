import * as Component from "./BigLoginOverlay.styles"
import { FaHeart, FaWallet, FaUserCircle, FaShoppingCart } from "react-icons/fa"

const BigLoginOverlay = ({ isBigLoginOpen, toggleIsBigLoginOpen }) => {
  const isbigloginopen = isBigLoginOpen ? 1 : 0

  return (
    <Component.LoginNav
      isbigloginopen={isbigloginopen}
      onMouseLeave={toggleIsBigLoginOpen}
    >
      <Component.LoginNavlist>
        <li>
          <Component.LoginNavLink
            to="/user/orders"
            onClick={toggleIsBigLoginOpen}
            isbigloginopen={isbigloginopen}
          >
            <FaWallet />
            My Orders
          </Component.LoginNavLink>
        </li>
        <li>
          <Component.LoginNavLink
            to="/user/cart"
            onClick={toggleIsBigLoginOpen}
            isbigloginopen={isbigloginopen}
          >
            <FaShoppingCart /> My Cart
          </Component.LoginNavLink>
        </li>
        <li>
          <Component.LoginNavLink
            to="/user/waitlist"
            onClick={toggleIsBigLoginOpen}
            isbigloginopen={isbigloginopen}
          >
            <FaHeart />
            My Wishlist
          </Component.LoginNavLink>
        </li>
        <li>
          <Component.LoginNavLink
            to="/user/account"
            onClick={toggleIsBigLoginOpen}
            isbigloginopen={isbigloginopen}
          >
            <FaUserCircle />
            My Account
          </Component.LoginNavLink>
        </li>
        <li>
          <Component.LoginSignUp
            to="/auth/sign-up"
            white={1}
            sm={1}
            onClick={toggleIsBigLoginOpen}
            isbigloginopen={isbigloginopen}
          >
            Sign Up
          </Component.LoginSignUp>
        </li>
      </Component.LoginNavlist>
    </Component.LoginNav>
  )
}

export default BigLoginOverlay
