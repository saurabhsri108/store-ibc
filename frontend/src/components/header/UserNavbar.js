import { Link } from "react-router-dom"
import { FaUserCircle, FaShoppingCart } from "react-icons/fa"

const UserNavbar = () => {
  return (
    <nav className="header__navigation header__navigation--right">
      <ul className="header__navlist">
        <li className="header__navlistitem active">
          <Link to="/" className="header__navlinkitem">
            <FaShoppingCart />
          </Link>
        </li>
        <li className="header__navlistitem">
          <Link to="/" className="header__navlinkitem">
            <FaUserCircle />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default UserNavbar
