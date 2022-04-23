const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema(
  {
    name: String,
    author: {
      type: ObjectId,
      ref: "myAuthor",
    },
    price: Number,
    ratings: Number,
    publisher: {
      type: ObjectId,
      ref: "myPublisher",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("myBook", bookSchema);
// _id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	name:"Two states",
// 		author:"61951bfa4d9fe0d34da86829",
// 	price:50,
// 		ratings:4.5,
// 		publisher: "61951bfa4d9fe0d34da84523"
