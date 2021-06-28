import { Link } from "react-router-dom";
import {
  Scroller,
  Overlay,
  OLogin,
  ONav,
  Octa,
  StyledFaTimes,
  ONavlist,
  ONavitem,
  OctaButton,
} from "./Header.styles";
import {
  FaHome,
  FaInfoCircle,
  FaMailBulk,
  FaHeart,
  FaWallet,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";

const MobileOverlay = ({ isOverlayOpen, overlayHandler }) => {
  return (
    <Overlay
      isOverlayOpen={isOverlayOpen}
      id="collapsableNav"
      onClick={overlayHandler}
    >
      <OLogin>
        <Link to="/" onClick={overlayHandler}>
          <FaUserCircle onClick={overlayHandler} />
          <p onClick={overlayHandler}>Login &amp; Signup</p>
        </Link>
      </OLogin>
      <StyledFaTimes />
      <ONav>
        <ONavlist>
          <ONavitem>
            <Scroller to="home" onClick={overlayHandler}>
              <FaHome />
              <p>Home</p>
            </Scroller>
          </ONavitem>
          <ONavitem>
            <Scroller to="about" onClick={overlayHandler}>
              <FaInfoCircle />
              <p>About</p>
            </Scroller>
          </ONavitem>
          <ONavitem>
            <Scroller to="contact" onClick={overlayHandler}>
              <FaMailBulk />
              <p>Contact Us</p>
            </Scroller>
          </ONavitem>
        </ONavlist>
      </ONav>
      <ONav>
        <ONavlist>
          <ONavitem>
            <Link to="/orders">
              <FaWallet />
              My Orders
            </Link>
          </ONavitem>
          <ONavitem>
            <Link to="/">
              <FaShoppingCart /> My Cart
            </Link>
          </ONavitem>
          <ONavitem>
            <Link to="/">
              <FaHeart />
              My Wishlist
            </Link>
          </ONavitem>
          <ONavitem>
            <Link to="/">
              <FaUserCircle />
              My Account
            </Link>
          </ONavitem>
        </ONavlist>
      </ONav>
      <Octa>
        <OctaButton>Browse Products</OctaButton>
        <OctaButton>Subscribe to Get Updates</OctaButton>
      </Octa>
    </Overlay>
  );
};

export default MobileOverlay;
