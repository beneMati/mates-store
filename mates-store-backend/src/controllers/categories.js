const Categories = require("../models/categories");

exports.getCategories = async (req, res) => {
  res.send("Get All Categories");
};

exports.createCategory = async (req, res) => {
  res.status(201).send("Create Category");
};
