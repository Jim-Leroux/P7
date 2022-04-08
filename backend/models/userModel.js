/********** import modules **********/
const { DataTypes } = require("sequelize");
const DB = require("../config/db");

/********** Définition model **********/
const User = DB.define("User", {
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
    allowNull: false,
    unique: true,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  user_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 0,
  },
});

module.exports = User;
