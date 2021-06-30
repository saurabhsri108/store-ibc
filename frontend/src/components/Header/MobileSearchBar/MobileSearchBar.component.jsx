import { SearchIcon } from "../Header.styles";
import { FaSearch } from "react-icons/fa";
import {
  MobileSearchSection,
  MobileSearchForm,
  MobileSearchField,
} from "./MobileSearchBar.styles";

const MobileSearchBar = () => {
  return (
    <MobileSearchSection>
      <MobileSearchForm>
        <label>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <MobileSearchField
            type="search"
            autoFocus
            aria-label="Search for products, brands, and more"
            placeholder="Search for products, brands, and more"
          />
        </label>
      </MobileSearchForm>
    </MobileSearchSection>
  );
};

export default MobileSearchBar;
