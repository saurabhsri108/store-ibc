import {
  FaHome,
  FaInfoCircle,
  FaMailBulk,
  FaHeart,
  FaWallet,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import { userLogout } from "../../../redux/action-creators/user-action-creator"

import {
  Overlay,
  OLogin,
  OLoginLink,
  OLoginPara,
  StyledFaTimes,
  ONav,
  Scroller,
  ONavLink,
  Octa,
  OctaButton,
} from "./MobileOverlay.styles"

const MobileOverlay = ({ isOverlayOpen, overlayHandler }) => {
  const { pathname } = useLocation()
  const { userInfo } = useSelector((state) => state.userLogin)
  const dispatch = useDispatch()
  const history = useHistory()
  const logoutHandler = () => {
    dispatch(userLogout())
    overlayHandler()
    history.push("/auth/sign-in")
  }
  return (
    <Overlay
      isOverlayOpen={isOverlayOpen}
      id="collapsableNav"
      onClick={overlayHandler}
    >
      <OLogin>
        {!userInfo && (
          <OLoginLink to="/auth/sign-in" onClick={overlayHandler}>
            <FaUserCircle onClick={overlayHandler} />
            <OLoginPara onClick={overlayHandler}>
              Login &amp; Register
            </OLoginPara>
          </OLoginLink>
        )}
        {userInfo && (
          <OLoginLink to="/" onClick={logoutHandler}>
            <FaUserCircle onClick={overlayHandler} />
            <OLoginPara onClick={overlayHandler}>Logout</OLoginPara>
          </OLoginLink>
        )}
      </OLogin>
      <StyledFaTimes />
      {pathname === "/" && (
        <ONav>
          <ul>
            <li>
              <Scroller
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-94}
                duration={600}
                isDynamic={true}
                onClick={overlayHandler}
              >
                <FaHome />
                Home
              </Scroller>
            </li>
            <li>
              <Scroller
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                isDynamic={true}
                onClick={overlayHandler}
              >
                <FaInfoCircle />
                About
              </Scroller>
            </li>
            <li>
              <Scroller
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={600}
                isDynamic={true}
                onClick={overlayHandler}
              >
                <FaMailBulk />
                Contact Us
              </Scroller>
            </li>
          </ul>
        </ONav>
      )}
      <ONav>
        <ul>
          <li>
            <ONavLink
              to="/user/orders"
              className={pathname === "/user/orders" && "active"}
            >
              <FaWallet />
              My Orders
            </ONavLink>
          </li>
          <li>
            <ONavLink
              to="/user/cart"
              className={pathname === "/user/cart" && "active"}
            >
              <FaShoppingCart /> My Cart
            </ONavLink>
          </li>
          <li>
            <ONavLink
              to="/user/waitlist"
              className={pathname === "/user/waitlist" && "active"}
            >
              <FaHeart />
              My Wishlist
            </ONavLink>
          </li>
          <li>
            <ONavLink
              to="/user/account"
              className={pathname === "/user/account" && "active"}
            >
              <FaUserCircle />
              My Account
            </ONavLink>
          </li>
        </ul>
      </ONav>
      <Octa>
        <OctaButton to="/products">Browse Products</OctaButton>
        <OctaButton to="/subscription">Subscribe to Get Updates</OctaButton>
      </Octa>
    </Overlay>
  )
}

export default MobileOverlay
