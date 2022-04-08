/********** import modules **********/
const express = require("express");
const comCtrl = require("../controllers/comCtrl");

/********** déclaration Router **********/
let router = express.Router();

router.get("/getAll", comCtrl.getAll);

router.get("/getOne/:id", comCtrl.getOne);

router.post("/createOne", comCtrl.createOne);

router.put("/updateOne/:id", comCtrl.updateOne);

router.delete("/deleteOne/:id", comCtrl.deleteOne);

module.exports = router;
