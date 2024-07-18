const Ajv = require("ajv")

const createValidator = (schema) => {
	const ajv = new Ajv()
	return ajv.compile(schema)
}

module.exports = createValidator
