const express = require("express");
const router = express.Router();

const authorcontroller = require("../controllers/authorController");
const publisherController = require("../controllers/publisherController");
const bookController = require("../controllers/bookController");

router.post("/createAuthor", authorcontroller.create_author);
router.post("/createPublisher", publisherController.create_publisher);
router.post("/createBook", bookController.create_book);
router.get("/getbooks", bookController.getBooksWithAuthorDetails);

module.exports = router;
