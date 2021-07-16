import { InputCheckbox, InputGroup } from "../../FormComponents"
import { FilterSpace, FilterHeading } from "./Filters.styles"

const FilterBox = ({ options, heading }) => {
  return (
    <FilterSpace>
      <FilterHeading>{heading}</FilterHeading>
      {options?.map((option) => {
        let modifiedOption = option?.split(" ").join("_").toLowerCase()
        let textOption = option
          ?.split(" ")
          .map((o) => {
            if (o !== undefined && o !== null)
              return o[0].toUpperCase() + o.slice(1)
            return null
          })
          .join(" ")
        return (
          <InputGroup
            key={modifiedOption}
            style={{
              marginBottom: "0.4rem",
            }}
          >
            <InputCheckbox
              name={modifiedOption}
              id={modifiedOption}
              value={option}
            >
              {textOption}
            </InputCheckbox>
          </InputGroup>
        )
      })}
    </FilterSpace>
  )
}

export default FilterBox
