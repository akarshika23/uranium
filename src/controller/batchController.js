const batchModel = require("../models/batchModel");

const batch_controller = async function (req, res) {
  let data = req.body;
  const batch_data = await batchModel.create(data);
  res.send({ data: batch_data });
};
module.exports.batch_controller = batch_controller;
