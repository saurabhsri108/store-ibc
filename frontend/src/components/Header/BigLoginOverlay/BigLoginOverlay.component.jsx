import * as Component from "./BigLoginOverlay.styles"
import { FaHeart, FaWallet, FaUserCircle, FaShoppingCart } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../../../redux/action-creators/user-action-creator"
import { useHistory } from "react-router-dom"

const BigLoginOverlay = () => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()
  const history = useHistory()

  const logoutHandler = () => {
    dispatch(userLogout())
    history.push("/auth/sign-in")
  }

  return (
    <Component.LoginNavlist className="inside-menu">
      <li>
        <Component.LoginNavLink to="/user/orders">
          <FaWallet />
          My Orders
        </Component.LoginNavLink>
      </li>
      <li>
        <Component.LoginNavLink to="/user/cart">
          <FaShoppingCart /> My Cart
        </Component.LoginNavLink>
      </li>
      <li>
        <Component.LoginNavLink to="/user/waitlist">
          <FaHeart />
          My Wishlist
        </Component.LoginNavLink>
      </li>
      <li>
        <Component.LoginNavLink to="/user/account">
          <FaUserCircle />
          My Account
        </Component.LoginNavLink>
      </li>
      <li>
        {!userInfo && (
          <Component.LoginSignUp to="/auth/sign-up">
            Sign Up
          </Component.LoginSignUp>
        )}
        {userInfo && (
          <Component.Logout onClick={logoutHandler}>Logout</Component.Logout>
        )}
      </li>
    </Component.LoginNavlist>
  )
}

export default BigLoginOverlay
