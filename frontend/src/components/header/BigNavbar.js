import { Link } from "react-router-dom"
import { FaHome, FaInfoCircle, FaMailBulk } from "react-icons/fa"

const BigNavbar = () => {
  return (
    <nav className="header__navigation header__navigation--left">
      <ul className="header__navlist">
        <li className="header__navlistitem active">
          <Link to="/" className="header__navlinkitem">
            <FaHome />
            Home
          </Link>
        </li>
        <li className="header__navlistitem">
          <Link to="/" className="header__navlinkitem">
            <FaInfoCircle />
            About
          </Link>
        </li>
        <li className="header__navlistitem">
          <Link to="/" className="header__navlinkitem">
            <FaMailBulk />
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default BigNavbar
