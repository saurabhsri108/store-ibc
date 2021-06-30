import { useState } from "react";
import {
  MainHeader,
  HeaderContainer,
  FirstHeaderSection,
} from "./Header.styles";
import MobileOverlay from "./MobileOverlay/MobileOverlay.component";
import MobileSearchBar from "./MobileSearchBar/MobileSearchBar.component";
import BigSearchBar from "./BigSearchBar/BigSearchBar.component";
import UserActionsNavigation from "./UserActions/UserActions.component";
import BigScreenNavigation from "./BigScreenNavigation/BigScreenNavigation.component";
import SiteLogo from "./Logo/SiteLogo.component";

const Header = (props) => {
  const [isOverlayOpen, toggleIsOverlayOpen] = useState(false);

  const overlayHandler = () => {
    toggleIsOverlayOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <MainHeader id="home">
      <MobileOverlay
        isOverlayOpen={isOverlayOpen}
        overlayHandler={overlayHandler}
      />
      <HeaderContainer>
        <FirstHeaderSection>
          <SiteLogo overlayHandler={overlayHandler} />
          <BigScreenNavigation />
          <BigSearchBar />
          <UserActionsNavigation />
        </FirstHeaderSection>
        <MobileSearchBar />
      </HeaderContainer>
    </MainHeader>
  );
};

export default Header;
