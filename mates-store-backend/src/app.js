const express = require("express")
const itemsRouter = require("./routes/items")
const logger = require("./utils/logger")
const { v4: uuidv4 } = require("uuid")

const app = express()

app.use(express.json())

app.use((req, res, next) => {
	req.log = logger.child({
		reqId: uuidv4(),
	})
	next()
})

app.use("/items", itemsRouter)

module.exports = app
