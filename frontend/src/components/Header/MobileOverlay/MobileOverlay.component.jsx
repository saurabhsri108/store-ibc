import {
  FaHome,
  FaInfoCircle,
  FaMailBulk,
  FaHeart,
  FaWallet,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";

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
} from "./MobileOverlay.styles";

const MobileOverlay = ({ isOverlayOpen, overlayHandler }) => {
  return (
    <Overlay
      isOverlayOpen={isOverlayOpen}
      id="collapsableNav"
      onClick={overlayHandler}
    >
      <OLogin>
        <OLoginLink to="/" onClick={overlayHandler}>
          <FaUserCircle onClick={overlayHandler} />
          <OLoginPara onClick={overlayHandler}>Login &amp; Signup</OLoginPara>
        </OLoginLink>
      </OLogin>
      <StyledFaTimes />
      <ONav>
        <ul>
          <li>
            <Scroller to="home" onClick={overlayHandler}>
              <FaHome />
              Home
            </Scroller>
          </li>
          <li>
            <Scroller to="about" onClick={overlayHandler}>
              <FaInfoCircle />
              About
            </Scroller>
          </li>
          <li>
            <Scroller to="contact" onClick={overlayHandler}>
              <FaMailBulk />
              Contact Us
            </Scroller>
          </li>
        </ul>
      </ONav>
      <ONav>
        <ul>
          <li>
            <ONavLink to="/orders">
              <FaWallet />
              My Orders
            </ONavLink>
          </li>
          <li>
            <ONavLink to="/">
              <FaShoppingCart /> My Cart
            </ONavLink>
          </li>
          <li>
            <ONavLink to="/">
              <FaHeart />
              My Wishlist
            </ONavLink>
          </li>
          <li>
            <ONavLink to="/">
              <FaUserCircle />
              My Account
            </ONavLink>
          </li>
        </ul>
      </ONav>
      <Octa>
        <OctaButton>Browse Products</OctaButton>
        <OctaButton>Subscribe to Get Updates</OctaButton>
      </Octa>
    </Overlay>
  );
};

export default MobileOverlay;
