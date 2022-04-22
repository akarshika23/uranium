const { type } = require("express/lib/response");
const prdouct_create = require("../models/productModel")
const create_user = require("../models/userModel")

 const createUser= async function (req, res) {
     let data= req.body;
    //  let  header1 = req.headers["content-type"]; 
    //      console.log(header1);
    let header = req.headers.isfreeappuser;
    // let header2 = res.setHeader("name","hemant")
    // console.log(header2);
    if(!header) return res.send({ msg : "there is no data in it ...."})
    let createUser= await create_user.create(data)
    res.send({data: createUser});
  }
const createProducts= async function (req, res) {
    let data= req.body
    let create_products= await prdouct_create.create(data)
    res.send({data: create_products});
}
const createProducts1= async function (req, res) {
    let data= req.body
    let create_products= await prdouct_create.create(data)
    res.send({data: create_products});
}
 module.exports.createUser= createUser;
 module.exports.createProducts=createProducts;
