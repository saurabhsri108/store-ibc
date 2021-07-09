import bcrypt from "bcryptjs"

const users = [
  {
    username: "admin001",
    email: "admin001@storejs.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    username: "user001",
    email: "user001@storejs.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    username: "user002",
    email: "user002@storejs.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
