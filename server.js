const express = require("express");
const server = express();
const db = require("./src/db/conect");
const { Sequelize } = require("sequelize");
server.listen(2000, () => {
  db.sync();
  console.log("listen");
});
