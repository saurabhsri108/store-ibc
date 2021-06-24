import { Link } from "react-router-dom"
import { FaWallet, FaShoppingCart, FaHeart, FaUserCircle } from "react-icons/fa"

const MobileUserInfo = () => {
  return (
    <nav className="header__mnavigation">
      <ul className="header__navlist">
        <li className="header__navlistitem active">
          <Link to="/" className="header__navlinkitem">
            <FaWallet />
            My Orders
          </Link>
        </li>
        <li className="header__navlistitem">
          <Link to="/" className="header__navlinkitem">
            <FaShoppingCart /> My Cart
          </Link>
        </li>
        <li className="header__navlistitem">
          <Link to="/" className="header__navlinkitem">
            <FaHeart />
            My Wishlist
          </Link>
        </li>
        <li className="header__navlistitem">
          <Link to="/" className="header__navlinkitem">
            <FaUserCircle />
            My Account
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileUserInfo
