const sendValidationError = (res, err = []) => {
	res.status(400).json({
		status: "error",
		data: null,
		message: "Validation Failed",
		errors: err,
	})
}

module.exports = { sendValidationError }
