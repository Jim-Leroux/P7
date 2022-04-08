/********** import modules **********/
const express = require("express");
const postCtrl = require("../controllers/postCtrl");

/********** déclaration Router **********/
let router = express.Router();

router.get("/getAll", postCtrl.getAll);

router.get("/getOne/:id", postCtrl.getOne);

router.post("/createOne", postCtrl.createOne);

router.put("/updateOne/:id", postCtrl.updateOne);

router.delete("/deleteOne/:id", postCtrl.deleteOne);

module.exports = router;
