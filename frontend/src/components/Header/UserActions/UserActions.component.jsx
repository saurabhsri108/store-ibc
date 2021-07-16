import { FaOpencart, FaSignOutAlt } from "react-icons/fa"
import * as Component from "./UserActions.styles"
import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../../../redux/action-creators/user-action-creator"

const UserActionsNavigation = () => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const { cartItems } = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()
  return (
    <Component.UserActionsNav>
      <Component.UserNavlist>
        <li>
          <Component.UserCartLink to="/cart">
            <Component.UserCartNumber>
              {cartItems?.length}
            </Component.UserCartNumber>
            <FaOpencart />
            <Component.UserCartHeading>Cart</Component.UserCartHeading>
          </Component.UserCartLink>
        </li>
        {!userInfo && (
          <>
            <Component.UserLoginLink to="/auth/sign-in">
              <Component.StyledFaSignInAlt />
              <Component.UserLoginHeading>Login</Component.UserLoginHeading>
            </Component.UserLoginLink>
          </>
        )}
        {userInfo && (
          <Component.UserCartLink to="/user/account">
            <Component.Username>{userInfo.username}</Component.Username>
            <Component.UserImage src={userInfo.image} />
            <FaSignOutAlt
              style={{ marginLeft: "1rem" }}
              onClick={() => dispatch(userLogout())}
            />
          </Component.UserCartLink>
        )}
      </Component.UserNavlist>
    </Component.UserActionsNav>
  )
}

export default UserActionsNavigation
