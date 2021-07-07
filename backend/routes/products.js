import { Router } from "express"

const route = Router()

route.get("/", (req, res) => {
  console.log(req)
  res.send("I am here")
})

export default route
