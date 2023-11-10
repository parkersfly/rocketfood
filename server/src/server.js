require("express-async-errors")
const express = require("express")
const AppError = require("./utils/AppError")
const routes = require("./routes")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: ["http://localhost:5173", "http://127.0.0.1:5173/"],
  credentials: true,
}))

app.use(routes)

app.use((error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

