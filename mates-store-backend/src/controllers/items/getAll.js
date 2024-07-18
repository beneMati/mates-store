const itemsService = require("../../services/items.service")
const sendResponse = require("../../utils/handleResponse")

const getItems = async (req, res) => {
	req.log.info("Start transaction getItems")
	req.log.debug("Begin Items Service")
	const data = await itemsService.getAll()
	req.log.debug("Stop Items Service")
	sendResponse(res, 200, "Success", data)
	req.log.info("End transaction getItems")
}

module.exports = getItems
