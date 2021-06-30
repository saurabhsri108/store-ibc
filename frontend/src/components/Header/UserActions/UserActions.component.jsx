import BigLoginOverlay from "../BigLoginOverlay/BigLoginOverlay.component";
import { FaOpencart } from "react-icons/fa";
import { useState } from "react";
import {
  UserActionsNav,
  UserNavlist,
  UserCartLink,
  UserCartNumber,
  UserCartHeading,
  UserLoginLink,
  UserLoginHeading,
  StyledFaSignInAlt,
} from "./UserActions.styles";

const UserActionsNavigation = () => {
  const [isBigLoginOpen, toggleIsBigLoginOpen] = useState(false);

  const overlayLoginHandler = () => {
    toggleIsBigLoginOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <UserActionsNav>
      <UserNavlist>
        <li>
          <UserCartLink to="/">
            <UserCartNumber>0</UserCartNumber>
            <FaOpencart />
            <UserCartHeading>Cart</UserCartHeading>
          </UserCartLink>
        </li>
        <li>
          <UserLoginLink
            to="/"
            onMouseEnter={overlayLoginHandler}
            onMouseLeave={overlayLoginHandler}
          >
            <StyledFaSignInAlt />
            <UserLoginHeading>Login</UserLoginHeading>
          </UserLoginLink>
          <BigLoginOverlay
            isBigLoginOpen={isBigLoginOpen}
            toggleIsBigLoginOpen={toggleIsBigLoginOpen}
          />
        </li>
      </UserNavlist>
    </UserActionsNav>
  );
};

export default UserActionsNavigation;
