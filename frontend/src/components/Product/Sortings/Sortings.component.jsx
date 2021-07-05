import React from "react"

const Sortings = () => {
  return (
    <div>
      <div className="breadcrumbs">
        <span>Home &gt;</span>
        <span>Products &gt;</span>
      </div>
      <div className="category-heading">
        All Products (showing 1 - 5 products)
      </div>
      <div className="sorting-actions">
        <span>Sort by</span>
        <span>Prices - Low to High</span>
        <span>Prices - High to Low</span>
        <span>Average Ratings - High to Low</span>
      </div>
    </div>
  )
}

export default Sortings
