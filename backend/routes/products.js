import { Router } from "express"
const products = [{ _id: "1", name: "API" }]

const route = Router()

route.get("/products", (req, res) => {
  res.json(products)
})

route.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

route.post("/products", (req, res) => {
  products.push(req.body)
  res.status(200).send("Product added successfully to the database")
})

route.put("/products/:id", (req, res) => {
  console.log(req.params.id)
})

route.delete("/products/:id", (req, res) => {
  console.log(req.params.id)
})

export default route
