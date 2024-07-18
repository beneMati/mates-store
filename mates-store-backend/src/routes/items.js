const router = require("express").Router()
const getAll = require("../controllers/items/getAll")

router.get("/", getAll)
// TODO: Create POST endpoint to check ajv validator, 1: in a message 2: in a file

module.exports = router
