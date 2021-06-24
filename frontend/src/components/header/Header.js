import BigSearchBar from "./BigSearchBar"
import Logo from "./Logo"
import MobileHamburger from "./MobileHamburger"
import BigNavbar from "./BigNavbar"
import UserNavbar from "./UserNavbar"
import MobileSearchBar from "./MobileSearchBar"
import MobileNavbar from "./MobileNavbar"
import MobileLogin from "./MobileLogin"
import MobileUserInfo from "./MobileUserInfo"
import MobileCTA from "./MobileCTA"

const Header = () => {
  return (
    <header className="header">
      <section className="header__container">
        <MobileHamburger />
        <Logo />
        <BigNavbar />
        <BigSearchBar />
        <UserNavbar />
      </section>
      <section className="header__mobilecontainer">
        <MobileSearchBar />
      </section>
      <section className="header__moverlay" id="collapsableNav">
        <MobileLogin />
        <MobileNavbar />
        <MobileUserInfo />
        <MobileCTA />
      </section>
    </header>
  )
}

export default Header
