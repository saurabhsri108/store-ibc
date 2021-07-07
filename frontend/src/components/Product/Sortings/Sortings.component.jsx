import { InputRadio } from "../../FormComponents"
import {
  SortContainer,
  CategoryHeading,
  SortingActions,
  SortHeading,
  SortButton,
} from "./Sorting.styles"
import { StyledFaTimes } from "../Filters/Filters.styles"

const Sortings = ({ isSortOpen, setIsSortOpen }) => {
  return (
    <SortContainer isSortOpen={isSortOpen}>
      <CategoryHeading>All Products (showing 1 - 9 products)</CategoryHeading>
      <SortingActions>
        <SortHeading>Sort by</SortHeading>
        <StyledFaTimes onClick={setIsSortOpen} />
        <InputRadio name="sort" id="lth" value="lth">
          Prices - Low to High
        </InputRadio>
        <InputRadio name="sort" id="htl" value="htl">
          Prices - High to Low
        </InputRadio>
        <InputRadio name="sort" id="ahtl" value="ahtl">
          Average Ratings - High to Low
        </InputRadio>
      </SortingActions>
      <SortButton onClick={setIsSortOpen}>Sort</SortButton>
    </SortContainer>
  )
}

export default Sortings
