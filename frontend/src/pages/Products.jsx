import { useEffect, useState } from "react"
import axios from "axios"
import Product from "../components/Product/Product.component"
import Filters from "../components/Product/Filters/Filters.component"
import Loader from "../components/Loading/Loading.component"
import Paginations from "../components/Product/Paginations/Paginations.component"
import Sortings from "../components/Product/Sortings/Sortings.component"

import {
  ProductsContainer,
  FilterSection,
  ListingsSection,
  ProductSection,
  SortingSection,
  PaginationSection,
} from "../components/Product/Product.styles"

const Products = ({ history, location, match }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const { status, data } = await axios.get(
        "https://fakestoreapi.com/products"
      )
      if (status === 200) setProducts((prevProducts) => (prevProducts = data))
    }
    getProducts()
    return null
  }, [])

  if (products.length === 0) return <Loader />

  return (
    <ProductsContainer>
      <FilterSection>
        <Filters />
      </FilterSection>
      <ListingsSection>
        <SortingSection>
          <Sortings />
        </SortingSection>
        <ProductSection>
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </ProductSection>
        <PaginationSection>
          <Paginations />
        </PaginationSection>
      </ListingsSection>
    </ProductsContainer>
  )
}

export default Products
