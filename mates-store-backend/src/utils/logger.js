const winston = require("winston")
const moment = require("moment")
const path = require("path")

const logger = winston.createLogger({
	level: process.env.NODE_ENV || "info",
	transports: [
		new winston.transports.File({
			filename: path.resolve(
				path.join(
					__dirname,
					"..",
					`${moment().format("YYYY-MM-DD")}-mates-logger.log`
				)
			),
		}),
	],
})

module.exports = logger
