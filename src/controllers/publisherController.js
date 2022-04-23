const publisher_Schema = require("../models/publisherModel");

const create_publisher = async function (req, res) {
  let data = req.body;
  const publisher_data = await publisher_Schema.create(data);
  res.send({ status: true, data: publisher_data });
};
module.exports.create_publisher = create_publisher;
