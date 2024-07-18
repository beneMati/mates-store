const schema = require("../models/items")
const validator = require("../utils/ajvValidator")
const httpErrors = require("../utils/handleError")

const validate = validator(schema)

const validatorItem = (req, res, next) => {
	const valid = validate(req.body)

	if (!valid) return httpErrors.sendValidationError(res, validate.errors)

	return next()
}

module.exports = validatorItem
