import { BigScreenNav, BigNavlist } from "./BigScreenNavigation.styles"
import { Scroller } from "../Header.styles"

const BigScreenNavigation = () => {
  return (
    <BigScreenNav>
      <BigNavlist>
        <li>
          <Scroller to="home" className="active">
            Home
          </Scroller>
        </li>
        <li>
          <Scroller to="about">About Us</Scroller>
        </li>
        <li>
          <Scroller to="contact">Contact Us</Scroller>
        </li>
      </BigNavlist>
    </BigScreenNav>
  )
}

export default BigScreenNavigation
