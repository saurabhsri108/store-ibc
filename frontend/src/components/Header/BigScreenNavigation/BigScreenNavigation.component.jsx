import { BigScreenNav, BigNavlist } from "./BigScreenNavigation.styles"
import { Scroller } from "../Header.styles"

const BigScreenNavigation = () => {
  return (
    <BigScreenNav>
      <BigNavlist>
        <li>
          <Scroller
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-74}
            duration={600}
            isDynamic={true}
          >
            Home
          </Scroller>
        </li>
        <li>
          <Scroller
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={600}
            isDynamic={true}
          >
            About Us
          </Scroller>
        </li>
        <li>
          <Scroller
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={600}
            isDynamic={true}
          >
            Contact Us
          </Scroller>
        </li>
      </BigNavlist>
    </BigScreenNav>
  )
}

export default BigScreenNavigation
