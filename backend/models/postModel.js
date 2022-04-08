/********** import modules **********/
const { DataTypes } = require("sequelize");
const DB = require("../config/db");

/********** Définition model **********/
const Post = DB.define("Post", {
  post_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  post_content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  post_likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Post;
