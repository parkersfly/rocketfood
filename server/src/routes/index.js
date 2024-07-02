const { Router } = require("express")

const routes = Router()

const usersRoutes = require("./users.routes")
const sessionsRoutes = require("./sessions.routes")
const platesRoutes = require("./plates.routes")
const tagsRoutes = require("./tags.routes")

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/plates", platesRoutes)
routes.use("/tags", tagsRoutes)

module.exports = routes