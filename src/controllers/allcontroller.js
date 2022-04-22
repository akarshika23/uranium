const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");



const createAuthor = async function (req, res) {
  let data_author = req.body;
  let author_Data = await authorModel.create(data_author);
  res.send({ user: author_Data });
};
const createBook = async function (req, res) {
  let data_book = req.body;
  let book_Data = await bookModel.create(data_book);
  res.send({ user: book_Data });
};
const allBooks = async (req, res) => {
  let book_written = await authorModel.find({author_name : "Chetan Bhagat"});
  let id = book_written[0].author_id;
  let bookName = await bookModel.find({ author_id: id }).select({ name: 1 });
  res.send({data : bookName });
};

//const findUpdateTwoState



module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;
module.exports.allBooks = allBooks;