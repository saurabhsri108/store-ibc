import bcrypt from "bcryptjs"

const users = [
  {
    name: "Admin OP",
    username: "admin001",
    email: "admin001@storejs.com",
    password: bcrypt.hashSync("123456", 10),
    imageUrl:
      "https://ik.imagekit.io/saudev001/storejs-project/users/dummy-profile-pic-300x300_ECDppcsXU.jpg",
    fileId: "60fd799a3e59bd7ffa3d9d71",
    verified: true,
    isAdmin: true,
  },
  {
    name: "User 1",
    username: "user001",
    email: "user001@storejs.com",
    password: bcrypt.hashSync("123456", 10),
    imageUrl:
      "https://ik.imagekit.io/saudev001/storejs-project/users/dummy-profile-pic-300x300_ECDppcsXU.jpg",
    fileId: "60fd799a3e59bd7ffa3d9d71",
    verified: true,
  },
]

export default users
