// const express = require('express');
// const router = express.Router();
// // const UserModel= require("../models/userModel.js")
// //const UserController= require("../controllers/userController")
// //const BookController= require("../controllers/bookController");
// const bookModel = require('../models/bookModel');
// const authorModel = require('../models/authorModel');
// const allcontroller = require('../controllers/allcontroller')


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

//router.post("/createBook", BookController.createBook)

// router.get("/getBooksData", BookController.getBooksData)

//----------------------------------------------------------------------------------------------------------------------

// router.post("/createAuthor", allcontroller.createAuthor)
// router.post("/createBook", allcontroller.createBook)
// router.post("/allBooks", allcontroller.allBooks)
// module.exports = router;
const express = require("express");
const router = express.Router();

 const userController = require("../controllers/userController");

const productController = require("../controllers/userController");

 router.post("/createusers", userController.createUser);

 router.post("/createproducts", productController.createProducts);

 module.exports = router;
