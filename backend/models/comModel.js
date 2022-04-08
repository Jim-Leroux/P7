/********** import modules **********/
const { DataTypes } = require("sequelize");
const DB = require("../config/db");

/********** Définition model **********/
const Com = DB.define("Com", {
  coms_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  com_content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  com_likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Com;
