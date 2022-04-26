let axios = require("axios");

let getStates = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getOtp = async function (req, res) {
  try {
    let blahhh = req.body;

    console.log(`body is : ${blahhh} `);
    var options = {
      method: "post",
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
let get_District = async function (req, res) {
  try {
    let district_Id = req.query.district_id;
    let date = req.query.date;
    // console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_Id}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
let get_Weather = async function (req, res) {
  try {
    let country = req.query.country;
    let appid = req.query.appid;

    // console.log(`query params are: ${country} ${appId}`);
    var options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appid}`,
    };
    let result = await axios(options);
    console.log(result.data.main.temp);
    res.status(200).send({ msg: result.data.main.temp });
  } catch (err) {
    // console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
let get_cities = async function (req, res) {
  try {
    let country = req.query.country;
    let appid = req.query.appid;

    // console.log(`query params are: ${country} ${appId}`);
    var options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appid}`,
    };
    let result = await axios(options);
    console.log(result.data.main.temp);
    res.status(200).send({ msg: result.data.main.temp });
  } catch (err) {
    // console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
const get_memes_request = async function (req, res) {
  let template_id = req.query.template_id;
  let text0 = req.query.text0;
  let text1 = req.query.text1;
  let username = req.query.username;
  let password = req.query.password;
  let data_body = req.body;
  try {
    var options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text=${text0}&text1=${text1}&username=${username}&password=${password}`,
      data: data_body,
    };

    let result = await axios(options);
    // console.log(`the values are ${result.data}`);
    res.status(200).send({ data: result.data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getStates = getStates;
module.exports.get_District = get_District;
module.exports.get_cities = get_cities;

module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.get_Weather = get_Weather;
module.exports.get_memes_request = get_memes_request;
