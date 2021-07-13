import BigLoginOverlay from "../BigLoginOverlay/BigLoginOverlay.component"
import { FaOpencart } from "react-icons/fa"
import * as Component from "./UserActions.styles"
import { LoginMenuList } from "../BigLoginOverlay/BigLoginOverlay.styles"
import { useSelector } from "react-redux"

const UserActionsNavigation = () => {
  const { userInfo } = useSelector((state) => state.userLogin)
  const { cartItems } = useSelector((state) => state.cartItems)
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
        <LoginMenuList>
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
            </Component.UserCartLink>
          )}

          <BigLoginOverlay />
        </LoginMenuList>
      </Component.UserNavlist>
    </Component.UserActionsNav>
  )
}

export default UserActionsNavigation
