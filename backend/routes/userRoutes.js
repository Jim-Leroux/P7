/********** import modules **********/
const express = require("express");
const userCtrl = require("../controllers/userCtrl");

/********** déclaration Router **********/
let router = express.Router();

router.get("/getAll", userCtrl.getAll);

router.get("/getOne/:id", userCtrl.getOne);

router.post("/createOne", userCtrl.createOne);

router.put("/updateOne/:id", userCtrl.updateOne);

router.delete("/deleteOne/:id", userCtrl.deleteOne);

module.exports = router;
