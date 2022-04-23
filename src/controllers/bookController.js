const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");
// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
const create_book = async function (req, res) {
  let book = req.body;
  let authorId = req.body.author;
  let publisherId = req.body.publisher;

  //////////////////////////////////3A/////////////////////////////////
  if (!authorId) {
    return res.send("author id must be present it is required");
  }
  let author = await authorModel.findById(authorId); ///
  if (!author) {
    res.send("no author present with the given id");
  }
  if (!publisherId) {
    return res.send("publisher id must be present it is required");
  }
  let publisher = await publisherModel.findById(publisherId);
  if (!publisher) {
    return res.send("publisher id must be present it is required");
  }
  let book_Created = await bookModel.create(book);
  res.send({ data: book_Created });
};
const getBooksWithAuthorDetails = async function (req, res) {
  let specificAuthor = await bookModel
    .find()
    .populate("author")
    .populate("publisher");
  res.send({ data: specificAuthor });
};
// module.exports.newBookModel = newBookModel;
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
module.exports.create_book = create_book;
// In this api, you have to write a logic that validates the following :
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.
