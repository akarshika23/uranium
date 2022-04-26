const express = require("express");
const router = express.Router();
const CowinController = require("../controllers/cowinController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.get("/cowin/states", CowinController.getStates);
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts);
router.get("/cowin/getByPin", CowinController.getByPin);

router.post("/cowin/getOtp", CowinController.getOtp);
router.get("/cowin/findByDistrict", CowinController.get_District);
router.get("/api/getWeather", CowinController.get_Weather);
router.get("/api/getcities", CowinController.get_cities);
// router.post("/getmemes", CowinController.get_memes);
router.post("/get_memes", CowinController.get_memes_request);
// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date)

module.exports = router;
