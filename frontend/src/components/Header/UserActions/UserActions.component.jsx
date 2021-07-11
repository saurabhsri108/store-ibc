import BigLoginOverlay from "../BigLoginOverlay/BigLoginOverlay.component"
import { FaOpencart } from "react-icons/fa"
import * as Component from "./UserActions.styles"
import { useState } from "react"

const UserActionsNavigation = () => {
  const [isBigLoginOpen, toggleIsBigLoginOpen] = useState(false)

  const overlayLoginHandler = () => {
    toggleIsBigLoginOpen((prevIsOpen) => !prevIsOpen)
  }
  return (
    <Component.UserActionsNav>
      <Component.UserNavlist>
        <li>
          <Component.UserCartLink to="/">
            <Component.UserCartNumber>0</Component.UserCartNumber>
            <FaOpencart />
            <Component.UserCartHeading>Cart</Component.UserCartHeading>
          </Component.UserCartLink>
        </li>
        <li>
          <Component.UserLoginLink
            to="/auth/sign-in"
            onMouseEnter={overlayLoginHandler}
            onClick={overlayLoginHandler}
          >
            <Component.StyledFaSignInAlt />
            <Component.UserLoginHeading>Login</Component.UserLoginHeading>
          </Component.UserLoginLink>
          <BigLoginOverlay
            isBigLoginOpen={isBigLoginOpen}
            toggleIsBigLoginOpen={overlayLoginHandler}
          />
        </li>
      </Component.UserNavlist>
    </Component.UserActionsNav>
  )
}

export default UserActionsNavigation
