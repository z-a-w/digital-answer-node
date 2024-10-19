import dotenv from "dotenv"

dotenv.config()

export default {
    port: process.env.PORT,
    password: process.env.PASSWORD
}