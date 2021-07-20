import chalk from "chalk"
import dotenv from "dotenv"
import sgMail from "@sendgrid/mail"
dotenv.config()

const sendgridAPI = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPI)

export const emailMessage = (userEmail, userName, verification_token) => {
  return {
    to: userEmail,
    from: {
      name: "StoreJS",
      email: "no-reply@ibcoder.com",
    },
    templateId: process.env.SENDGRID_EMAIL_VERIFICATION_TEMPLATE_ID,
    dynamicTemplateData: {
      customer_name: userName,
      verification_link:
        process.env.NODE_ENV !== "production"
          ? `http://localhost:3000/auth/confirmation/${verification_token}`
          : `https://store-js.vercel.app/auth/confirmation/${verification_token}`,
    },
  }
}

export const sendEmail = async (emailMessage) => {
  try {
    const response = await sgMail.send(emailMessage)
    if (response[0].statusCode === 202) return response[0].statusCode
  } catch (error) {
    console.error(chalk.red.bold(error.message))
  }
}
