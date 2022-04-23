const mongoose = require("mongoose");
const publisher_model = new mongoose.Schema({
  name: String,
  headQuarter: String,
});
module.exports = mongoose.model("myPublisher", publisher_model);
