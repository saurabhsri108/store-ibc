import asyncHandler from "express-async-handler"
import Product from "../schema/product.schema.js"

/**
 * @desc      Fetch all products
 * @route     GET /api/v1/products
 * @access    Public
 */
export const fetchProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.status(200).json(products)
})

/**
 * @desc      Fetch single products
 * @route     GET /api/v1/products/:id
 * @access    Public
 */
export const fetchSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) res.status(200).json(product)
  else {
    res.status(404)
    throw new Error("Product not found")
  }
})

/**
 * @desc      Add a new product
 * @route     POST /api/v1/products
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
 * @route     PUT /api/v1/products/:id
 * @access    Admin
 */
export const updateProduct = asyncHandler(async (req, res) => {
  const storedProduct = await Product.findOne({ _id: req.params.id })
  for (let option in req.body) {
    storedProduct[option] = req.body[option]
  }
  res.status(201).json({
    storedProduct,
    message: "Product updated successfully",
  })
})

/**
 * @desc      Delete a product
 * @route     DELETE /api/v1/products/:id
 * @access    Admin
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id)
  res.status(200).json({
    deletedProduct,
    message: "Product deleted successfully",
  })
})
