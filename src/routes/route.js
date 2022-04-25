const express = require("express");
const router = express.Router();

const batchController = require("../controller/batchController");
const developerController = require("../controller/developerController");

router.post("/batches", batchController.batch_controller);

router.post("/developers", developerController.developerController);

router.get(
  "/scholarship-developers",
  developerController.scholarship_developers
);
router.get("/get_Developer", developerController.developers);

const middleWare1 = function (req, res, next) {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  console.log({ dateTime });
  next();
};
const middleWare2 = function (req, res, next) {
  // console.log(req.socket.remoteAddress);
  console.log("your IP is: " + req.ip);
  next();
};
const middleWare3 = function (req, res, next) {
  console.log(req.path);
  next();
};
router.get(
  "/Data",
  middleWare1,
  middleWare2,
  middleWare3,
  developerController.data
);
router.get("/Data", middleWare3, developerController.data);
router.get("/Data1", middleWare2, developerController.data);

module.exports = router;
