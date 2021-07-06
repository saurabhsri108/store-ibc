import { SearchIcon } from "../Header.styles"
import { BigScreenForm, BigSearchField } from "./BigSearchBar.styles"
import { FaSearch } from "react-icons/fa"

const BigSearchBar = () => {
  return (
    <BigScreenForm>
      <label>
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
        <BigSearchField
          type="search"
          autoFocus
          aria-label="Search for products, brands, and more"
          placeholder="Search for products, brands, and more"
        />
      </label>
    </BigScreenForm>
  )
}

export default BigSearchBar
