const { Sequelize, DataTypes } = require("sequelize");
const db = new Sequelize("meuback", "root", "beto123", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = db;
