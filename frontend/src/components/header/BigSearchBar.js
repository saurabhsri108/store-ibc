const SearchBar = () => {
  return (
    <form className="header__search">
      <input
        type="search"
        name="search"
        id="search"
        aria-label="Search for products, brands, and more"
        placeholder="Search for products, brands, and more"
      />
    </form>
  )
}

export default SearchBar
