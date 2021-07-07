import { useEffect, useState } from "react"
import axios from "axios"
import Product from "../components/Product/Product.component"
import Filters from "../components/Product/Filters/Filters.component"
import Loader from "../components/Loading/Loading.component"
import Paginations from "../components/Product/Paginations/Paginations.component"
import Sortings from "../components/Product/Sortings/Sortings.component"
import {
  ProductsContainer,
  ListingsSection,
  ProductSection,
  PaginationSection,
  ButtonActions,
  ProductButton,
} from "../components/Product/Product.styles"
import { FaFilter, FaSort } from "react-icons/fa"
import { prices, ratings, availability, assured, brands } from "../data"

const Products = ({ history, location, match }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      const { status, data } = await axios.get(
        "https://fakestoreapi.com/products"
      )
      if (status === 200) setProducts((prevProducts) => (prevProducts = data))
    }
    const getCategories = async () => {
      const { status, data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      )
      if (status === 200)
        setCategories((prevCategories) => (prevCategories = data))
    }
    getProducts()
    getCategories()
    return null
  }, [])

  const toggleFilterHandler = () => {
    setIsFilterOpen((prevStatus) => !prevStatus)
  }

  const toggleSortHandler = () => {
    setIsSortOpen((prevStatus) => !prevStatus)
  }

  if (products.length === 0) return <Loader />

  return (
    <>
      <ButtonActions>
        <ProductButton fs="1.2rem" sm={1} onClick={toggleFilterHandler}>
          <FaFilter />
          Filter
        </ProductButton>
        <ProductButton fs="1.2rem" sm={1} onClick={toggleSortHandler}>
          <FaSort />
          Sort
        </ProductButton>
      </ButtonActions>
      <ProductsContainer>
        <Filters
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={toggleFilterHandler}
          categories={categories}
          prices={prices}
          ratings={ratings}
          brands={brands}
          availability={availability}
          assured={assured}
        />
        <ListingsSection>
          <Sortings isSortOpen={isSortOpen} setIsSortOpen={toggleSortHandler} />
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
    </>
  )
}

export default Products
