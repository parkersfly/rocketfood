const { Router } = require("express")

const usersRoutes = Router()

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const UserValidatedController = require("../controllers/UserValidatedController")
const UsersController = require("../controllers/UsersController")
const userValidatedController = new UserValidatedController()
const usersController = new UsersController()

usersRoutes.post("/", usersController.create)
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.get("/validated", ensureAuthenticated, userValidatedController.index)

module.exports = usersRoutes