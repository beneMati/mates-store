const path = require("path")
const getFileData = require("../config/fileDb")

const file = path.resolve(path.join(__dirname, "../../data/items.json"))

const findAll = async () => {
	let data

	const element = getFileData(file)
	await Promise.all([element]).then((values) => {
		data = JSON.parse(values)
	})

	return data
}

module.exports = { findAll }
