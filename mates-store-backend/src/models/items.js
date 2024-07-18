const schema = {
	type: "object",
	properties: {
		id: { type: "integer" },
		title: { type: "string" },
		description: { type: "string" },
		price: { type: "number" },
		pictureUrl: { type: "string", format: "uri" },
		stock: { type: "integer" },
		categoryId: { type: "integer" },
	},
	required: [
		"id",
		"title",
		"description",
		"price",
		"pictureUrl",
		"stock",
		"categoryId",
	],
	additionalProperties: false,
}

module.exports = schema
