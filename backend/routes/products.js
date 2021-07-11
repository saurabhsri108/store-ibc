import { Router } from "express"
import * as methods from "../controllers/products.controller.js"

const route = Router()

route.get("/", methods.fetchProducts)
route.get("/:id", methods.fetchSingleProduct)
route.post("/", methods.addNewProduct)
route.put("/:id", methods.updateProduct)
route.delete("/:id", methods.deleteProduct)

export default route
