import { Router } from "express"
import asyncHandler from "express-async-handler"
import Product from "../schema/product.schema.js"

const route = Router()

/**
 * @desc      Fetch all products
 * @route     GET /api/products
 * @access    Public
 */
route.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.status(200).json(products)
  })
)

/**
 * @desc      Fetch single products
 * @route     GET /api/products/:id
 * @access    Public
 */
route.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) res.json(product)
    else {
      res.status(404)
      throw new Error("Product not found")
    }
  })
)

/**
 * @desc      Add a new product
 * @route     GET /api/products
 * @access    Admin
 */
route.post(
  "/",
  asyncHandler(async (req, res) => {
    const newProduct = await Product.create(req.body)
    res.status(200).json({
      product: newProduct,
      message: "Product added successfully to the database",
    })
  })
)

/**
 * @desc      Update a product
 * @route     GET /api/products/:id
 * @access    Admin
 */
route.put("/:id", (req, res) => {
  console.log(req.params.id)
})

/**
 * @desc      Delete a product
 * @route     GET /api/products/:id
 * @access    Admin
 */
route.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json({
      deletedProduct: deletedProduct,
      message: "Product deleted successfully",
    })
  })
)

export default route
