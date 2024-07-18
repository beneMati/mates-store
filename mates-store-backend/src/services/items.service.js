const itemsRepository = require("../repositories/itemsRepository")

const getAll = () => {
	return itemsRepository.findAll()
}

module.exports = { getAll }
