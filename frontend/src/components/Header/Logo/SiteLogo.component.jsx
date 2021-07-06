import { LogoSection, Hamburger, LogoLink } from "./SiteLogo.styles";
import { FaBars } from "react-icons/fa";

const SiteLogo = ({ overlayHandler }) => {
  return (
    <LogoSection>
      <Hamburger
        aria-expanded="false"
        aria-label="Toggle navigation"
        aria-controls="collapsableNav"
        onClick={overlayHandler}
      >
        <FaBars />
      </Hamburger>
      <LogoLink to="/">
        store<span>JS</span>
      </LogoLink>
    </LogoSection>
  );
};

export default SiteLogo;
