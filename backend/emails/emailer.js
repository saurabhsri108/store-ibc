import chalk from "chalk"
import path from "path"
import Email from "email-templates"
import dotenv from "dotenv"
dotenv.config()

export const emailer = new Email({
  message: {
    from: "admin001@storejs.com",
  },
  // send: true,
  transport: {
    jsonTransport: true,
  },
  views: {
    root: path.resolve("backend", "emails"),
  },
  preview: {
    open: {
      app: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
      wait: false,
    },
  },
  juice: true,
  juiceResources: {
    preserveImportant: true,
    webResources: {
      relativeTo: path.resolve("backend", "emails"),
    },
  },
})
// console.log(path.resolve("backend", "emails", "verify-email"))
const sendEmail = async () => {
  try {
    const res = await emailer.send({
      template: path.resolve("backend", "emails", "verify-email"),
      message: {
        to: "jobivi9264@ovooovo.com",
      },
      locals: {
        name: "User001",
      },
    })
    // console.log(res)
  } catch (error) {
    console.error(chalk.red.bold(error.message))
  }
}

sendEmail()
