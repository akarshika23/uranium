const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const developerSchema = new mongoose.Schema(
  {
    name: String,
    batch: {
      type: ObjectId,
      ref: "Batch",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    percentage: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("myDeveloper", developerSchema);
