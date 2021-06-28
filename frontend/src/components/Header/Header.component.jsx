import { useState } from "react";
import { FaBars, FaUserCircle, FaShoppingCart, FaSearch } from "react-icons/fa";
import {
  MainHeader,
  Container,
  FirstHeaderSection,
  LogoSection,
  Hamburger,
  LogoLink,
  BigScreenNav,
  BigScreenForm,
  UserActionsNav,
  MobileSearchSection,
  Navlist,
  Navitem,
  Navlink,
  Scroller,
  MobileSearchForm,
  SearchField,
  SearchIcon,
} from "./Header.styles";
import MobileOverlay from "./MobileOverlay.component";

const Header = (props) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const overlayHandler = () => {
    setIsOverlayOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <MainHeader>
      <MobileOverlay
        isOverlayOpen={isOverlayOpen}
        overlayHandler={overlayHandler}
      />
      <Container>
        <FirstHeaderSection>
          <LogoSection>
            <Hamburger
              aria-expanded="false"
              aria-label="Toggle navigation"
              aria-controls="collapsableNav"
              onClick={overlayHandler}
            >
              <FaBars />
            </Hamburger>
            <LogoLink to="/">storeJS</LogoLink>
          </LogoSection>
          <BigScreenNav>
            <Navlist>
              <Navitem>
                <Scroller to="/">Home</Scroller>
              </Navitem>
              <Navitem>
                <Scroller to="/">About Us</Scroller>
              </Navitem>
              <Navitem>
                <Scroller to="/">Contact Us</Scroller>
              </Navitem>
            </Navlist>
          </BigScreenNav>
          <BigScreenForm>
            <label>
              <SearchIcon>
                <FaSearch />
              </SearchIcon>
              <SearchField
                aria-label="Search for products, brands, and more"
                placeholder="Search for products, brands, and more"
              />
            </label>
          </BigScreenForm>
          <UserActionsNav>
            <Navlist>
              <Navitem>
                <Navlink to="/">
                  <FaShoppingCart />
                  {/* Cart */}
                </Navlink>
              </Navitem>
              <Navitem>
                <Navlink to="/" className="ctaLink">
                  <FaUserCircle />
                  {/* Login */}
                </Navlink>
              </Navitem>
            </Navlist>
          </UserActionsNav>
        </FirstHeaderSection>
        <MobileSearchSection>
          <MobileSearchForm>
            <label>
              <SearchIcon>
                <FaSearch />
              </SearchIcon>
              <SearchField
                autoFocus
                aria-label="Search for products, brands, and more"
                placeholder="Search for products, brands, and more"
              />
            </label>
          </MobileSearchForm>
        </MobileSearchSection>
      </Container>
    </MainHeader>
  );
};

export default Header;
