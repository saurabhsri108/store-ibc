import { FaSearch } from "react-icons/fa"

const MobileSearchBar = () => {
  return (
    <form className="header__mobilesearch">
      <div className="header__searchicon">
        <FaSearch />
      </div>
      <input
        type="search"
        name="mobilesearch"
        id="mobilesearch"
        aria-label="Search for products, brands, and more"
        placeholder="Search for products, brands, and more"
      />
    </form>
  )
}

export default MobileSearchBar
