const { Router } = require("express")

const tagsRoutes = Router()

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const ensureAuthorization = require("../middlewares/ensureAuthorization")

const TagsController = require("../controllers/TagsController")
const tagsController = new TagsController()

tagsRoutes.use(ensureAuthenticated)

tagsRoutes.delete("/", ensureAuthorization(["admin"]), tagsController.delete)

module.exports = tagsRoutes