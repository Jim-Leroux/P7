/********** import modules **********/
const express = require("express");
const cors = require("cors");
const DB = require("./config/db");

const dotenv = require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

/********** connexion database **********/
DB.sync()
  .then(() => console.log("connected to DB"))
  .catch((error) => console.log(error));

module.exports = app;
