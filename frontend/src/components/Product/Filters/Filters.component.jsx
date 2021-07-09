import {
  FilterContainer,
  FilterMainHeading,
  StyledFaTimes,
  FilterButton,
} from "./Filters.styles"
import FilterBox from "./FilterBox.component"
import { useSelector } from "react-redux"
import Loader from "../../Loading/Loading.component"
import Message from "../../Messages/Message.component"

const Filters = ({
  isFilterOpen,
  setIsFilterOpen,
  categories,
  prices,
  ratings,
  brands,
  availability,
  assured,
}) => {
  return (
    <FilterContainer isFilterOpen={isFilterOpen}>
      <FilterMainHeading>Filters</FilterMainHeading>
      <StyledFaTimes onClick={setIsFilterOpen} />
      <FilterBox options={categories} heading="Category" />
      <FilterBox options={assured} />
      <FilterBox options={prices} heading="Price" />
      <FilterBox options={ratings} heading="Ratings" />
      <FilterBox options={brands} heading="Brands" />
      <FilterBox options={availability} heading="Availability" />
      <FilterButton onClick={setIsFilterOpen}>Apply Filter</FilterButton>
    </FilterContainer>
  )
}

export default Filters
