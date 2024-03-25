require("dotenv").config();

const express = require("express");
const dbConnection = require("./config/mongoDb");
const swaggerUI = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");
const yaml = require("yamljs");
const { initialize } = require("express-openapi");

const app = express();
const port = process.env.PORT || 3000;

const swaggerDocument = yaml.parse(
  fs.readFileSync(path.join(__dirname, "/api/swagger.yaml"), "utf-8")
);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

initialize({
  app,
  apiDoc: swaggerDocument,
  operations: require("./controllers/categories"),
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});

dbConnection();
