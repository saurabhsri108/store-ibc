import asyncHandler from "express-async-handler"
import Product from "../schema/product.schema.js"

/**
 * @desc      Fetch all products
 * @route     GET /api/products
 * @access    Public
 */
export const fetchProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.status(200).json(products)
})

/**
 * @desc      Fetch single products
 * @route     GET /api/products/:id
 * @access    Public
 */
export const fetchSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) res.json(product)
  else {
    res.status(404)
    throw new Error("Product not found")
  }
})

/**
 * @desc      Add a new product
 * @route     GET /api/products
 * @access    Admin
 */
export const addNewProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product.create(req.body)
  res.status(201).json({
    product: newProduct,
    message: "Product added successfully to the database",
  })
})

/**
 * @desc      Update a product
 * @route     GET /api/products/:id
 * @access    Admin
 */
export const updateProduct = (req, res) => {
  console.log(req.params.id)
}

/**
 * @desc      Delete a product
 * @route     GET /api/products/:id
 * @access    Admin
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id)
  res.status(201).json({
    deletedProduct: deletedProduct,
    message: "Product deleted successfully",
  })
})
