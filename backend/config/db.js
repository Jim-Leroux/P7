/********** import modules **********/
const { Sequelize } = require("sequelize");

const dotenv = require("dotenv").config();

let sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

/********** synchronisation modèles **********/
// sequelize.sync()

module.exports = sequelize;
