const developer_controller = require("../models/developerModel");
const batch_model = require("../models/batchModel");

const developerController = async function (req, res) {
  let data = req.body;
  let developer_data = await developer_controller.create(data);
  res.send({ data: developer_data });
};
module.exports.developerController = developerController;

const scholarship_developers = async function (req, res) {
  let scholarship_data = await developer_controller.find({
    $and: [{ gender: "Female" }, { percentage: { $gt: 70, $gte: 70 } }],
  });
  res.send({ data: scholarship_data });
};
const developers = async function (req, res) {
  let data = req.query;
  const percentage = await developer_controller
    .find({
      percentage: { $gte: data.percentage },
    })
    .select({ batch: 1, _id: 1 });
  const batch = await batch_model.find({
    _id: percentage[0].batch,
    program: data.program,
  });
  res.send({ data: batch });
};
const data = async function (req, res) {
  //
  res.send({ data1: req.ip });
};
module.exports.scholarship_developers = scholarship_developers;
module.exports.developers = developers;
module.exports.data = data;

// For example GET /developers?percentage=55&program=radium should return all the developers from radium batch with a percentage greater than or equal to 55
