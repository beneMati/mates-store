const sendResponse = require("../../utils/handleResponse")

const getItems = async (req, res) => {
	// TODO:Get all items from file.
	sendResponse(res, 200, "Success", { items: "Get All Items" })
}

module.exports = getItems
