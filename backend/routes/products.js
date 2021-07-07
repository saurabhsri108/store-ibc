import { Router } from "express"
const products = { name: "API" }

const route = Router()

route.get("/products", (req, res) => {
  res.json(products)
})

route.get("/products/:id", (req, res) => {
  const product = products.filter((p) => p._id === req.params.id)
  res.send(product)
})

route.post("/products", (req, res) => {
  console.log(res.params)
})

route.put("/products/:id", (req, res) => {
  console.log(req.params.id)
})

route.delete("/products/:id", (req, res) => {
  console.log(req.params.id)
})

export default route
