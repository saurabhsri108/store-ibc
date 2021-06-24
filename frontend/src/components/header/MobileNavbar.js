import { Link } from "react-router-dom"
import { FaHome, FaInfoCircle, FaMailBulk } from "react-icons/fa"

const MobileNavbar = () => {
  return (
    <nav className="header__mnavigation">
      <ul className="header__navlist">
        <li className="header__navlistitem active">
          <Link to="/" className="header__navlinkitem">
            <FaHome />
            <p>Home</p>
          </Link>
        </li>
        <li className="header__navlistitem">
          <Link to="/" className="header__navlinkitem">
            <FaInfoCircle />
            <p>About</p>
          </Link>
        </li>
        <li className="header__navlistitem">
          <Link to="/" className="header__navlinkitem">
            <FaMailBulk />
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MobileNavbar
