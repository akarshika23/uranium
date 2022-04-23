const author_schema = require("../models/authorModel");

const create_author = async function (req, res) {
  let data = req.body;
  const author_data = await author_schema.create(data);
  res.send({ status: true, data: author_data });
};
module.exports.create_author = create_author;
