const bookModel = require("../models/bookModel");
const bookController = require("../controller/bookController")

const creatAuthor = async function (req, res) {
  let data_author = req.body;
  let author_Data = await userData.create(data);
  res.send({ user: savedData });
};
const creatBook = async function (req, res) {
  let data_book = req.body;
  let author_Data = await userData.create(data);
  res.send({ user: savedData });
};

// const bookList = async function (req, res) {
//   // let page = req.query.page;
//   let allUser = await userData
//     .find()
//     .select({ bookName: 1, authorName: 1, _id: 0 });
//   res.send({ data: allUser });
// };
// //getBooksInYear: takes year as input in post request and gives list of all books published that year

// const getBooksInYear = async function (req, res) {
//   let yearData = req.query.year;
//   let allUser = await userData.find({year:yearData});
//   res.send({ data: allUser });
// };
// const getParticularBooks = async function (req, res) {
//   let yearData1 = req.query.year;
//   let nameData = req.query.name;
//   let allUser = await userData.find({
//     $or:[{year:yearData1} ,{bookName:nameData}]
//   });
//   res.send({ data: allUser });
// };

// const getXINRBooks = async function (req, res) {
//   let allUser = await userData.find({
//     "price.indianPrice": { $in: ["Rs 100", "Rs 500"] },
//   });
//   // Person.find({ members: { $in: [id1] } });
//   res.send({ data: allUser });
// };
// const getRandomBooks = async function (req, res) {
//   let allUser = await userData.find({
//     $or: [{ stockAvailable: true }, { totalPages: { $gte: 500 } }],
//   });
//   res.send({ data: allUser });
// // };
// module.exports.getBooksInYear = getBooksInYear;
// module.exports.getParticularBooks = getParticularBooks;
module.exports.createBook = createBook;

// module.exports.getXINRBooks = getXINRBooks;
// module.exports.getRandomBooks = getRandomBooks;