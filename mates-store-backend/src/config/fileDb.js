const fs = require("fs/promises")

const getFileData = (file) => {
	return fs.readFile(file, "utf-8")
}

module.exports = getFileData
