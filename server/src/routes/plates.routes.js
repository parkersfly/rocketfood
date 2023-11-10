const { Router } = require("express")

const platesRoutes = Router()

const multer = require("multer")
const uploadConfig = require("../config/upload")
const upload = multer(uploadConfig.MULTER)

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const ensureAuthorization = require("../middlewares/ensureAuthorization")

const PlatesController = require("../controllers/PlatesController")
const platesController = new PlatesController()

const PlatesImageController = require("../controllers/PlatesImageController")
const platesImageController = new PlatesImageController()

platesRoutes.use(ensureAuthenticated)

platesRoutes.post("/", ensureAuthorization(["admin"]), upload.single("picture"), platesController.create)
platesRoutes.delete("/:id", ensureAuthorization(["admin"]), platesController.delete)
platesRoutes.get("/:id", platesController.show)
platesRoutes.get("/", platesController.index)
platesRoutes.patch("/plateImage", upload.single("picture"), platesImageController.update)

module.exports = platesRoutes