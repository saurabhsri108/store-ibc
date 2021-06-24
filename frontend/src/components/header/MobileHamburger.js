import { FaBars } from "react-icons/fa"

const MobileHamburger = () => {
  return (
    <button
      className="header__navcollapse"
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      aria-controls="collapsableNav"
    >
      <FaBars />
    </button>
  )
}

export default MobileHamburger
