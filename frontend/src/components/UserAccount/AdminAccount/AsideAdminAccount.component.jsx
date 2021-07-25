import {
  FaHeart,
  FaLock,
  FaShoppingCart,
  FaUserCircle,
  FaWallet,
} from "react-icons/fa"
import { Link } from "react-router-dom"
import { AccountInfo, AccountLinks } from "../Account.styles"

const AsideAdminAccount = ({ pathname, userDetails }) => {
  return (
    <aside>
      <AccountInfo>
        <img
          src={userDetails?.image}
          alt={userDetails?.name}
          width="96"
          className="avatar-img"
        />
        <h4 className="avatar-name">{userDetails?.name}</h4>
      </AccountInfo>
      <AccountLinks>
        <ul className="user-lists-menu">
          <li className="user-list-item">
            <Link
              to="/user/account"
              className={`user-link-item ${
                pathname === "/user/account" ? "active" : ""
              }`}
            >
              <FaUserCircle />
              Dashboard
            </Link>
          </li>
          <li className="user-list-item">
            <Link
              to="/user/orders"
              className={`user-link-item ${
                pathname === "/user/orders" ? "active" : ""
              }`}
            >
              <FaWallet />
              Orders
            </Link>
          </li>
          <li className="user-list-item">
            <Link
              to="/user/products"
              className={`user-link-item ${
                pathname === "/user/products" ? "active" : ""
              }`}
            >
              <FaShoppingCart />
              Products
            </Link>
          </li>
          <li className="user-list-item">
            <Link
              to="/user/users"
              className={`user-link-item ${
                pathname === "/user/users" ? "active" : ""
              }`}
            >
              <FaHeart />
              Users
            </Link>
          </li>
          <li className="user-list-item">
            <Link
              to="/user/reset"
              className={`user-link-item ${
                pathname === "/user/reset" ? "active" : ""
              }`}
            >
              <FaLock />
              Change Password
            </Link>
          </li>
        </ul>
      </AccountLinks>
    </aside>
  )
}

export default AsideAdminAccount
