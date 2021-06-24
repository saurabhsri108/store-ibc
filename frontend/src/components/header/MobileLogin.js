import { Link } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa"

const MobileLogin = () => {
  return (
    <div className="header__mlogin">
      <Link to="/">
        <FaUserCircle />
        <p>Login &amp; Signup</p>
      </Link>
    </div>
  )
}

export default MobileLogin
