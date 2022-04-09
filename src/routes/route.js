const express = require('express');
const myBioData=require("../logger/logger.js")
const printDate = require("../util/helper.js")
const printMonth =require("../util/helper.js")
const printFormat =require("../validator/formatter.js")
const router = express.Router();

router.get('/test-me1', function (req, res) {
     myBioData.name();
     
    res.send('My first ever api!')
});
router.get('/test-me', function (req, res) {
    printDate.date();

   res.send('My first ever api!')
});
router.get('/test-me', function (req, res) {
    printMonth.Month();

   res.send('My first ever api!')
});
router.get('/test-me-3', function (req, res) {
    printFormat.trimstring();
   res.send('My first ever api!')
});
router.get('/test-me-2', function (req, res) {
    printFormat.changecaseTsoLower();

   res.send('My first ever api!')
});
router.get('/test-me-1', function (req, res) {
    printFormat.changecaseToUpper();

   res.send({"Firstname" : "Shweta","age" : 26})
   
   
});
module.exports = router;
