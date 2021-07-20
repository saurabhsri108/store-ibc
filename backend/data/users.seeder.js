import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin OP",
    username: "admin001",
    email: "admin001@storejs.com",
    password: bcrypt.hashSync("123456", 10),
    verified: true,
    isAdmin: true,
  },
  {
    name: "User 1",
    username: "user001",
    email: "user001@storejs.com",
    password: bcrypt.hashSync("123456", 10),
    verified: true,
  },
  {
    name: "User 2",
    username: "user002",
    email: "user002@storejs.com",
    password: bcrypt.hashSync("123456", 10),
    verified: true,
  },
]

export default users
