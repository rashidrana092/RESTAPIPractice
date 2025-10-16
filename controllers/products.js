const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObj = {};

  if (company) {
    queryObj.company = company;
  }

  if (name) {
    queryObj.name = { $regex: name, $options: "i" }; // i means ignore case senstivity
    //queryObj.name=name
  }

  if (featured) {
    queryObj.featured = featured;
  }
  let apiData = Product.find(queryObj);
  if (sort) {
    let sortFix = sort.split(",").join(" "); // to remove , in sort
    apiData = apiData.sort(sortFix);
  }
  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  // pagination
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 2;
  let skip = (page - 1) * limit;

  // page=2
  // limit=3
  // skip=1*3=3
  apiData = apiData.skip(skip).limit(limit);

  console.log("queryobj++", queryObj);

  const Products = await apiData;
  //   const data = await Product.find({name:"iPhone"});   if want only one particular item
  // const data = await Product.find({}); // {} means all data
  res.status(200).json({ Products, nBHits: Products.length });
};

const getAllProductsTesting = async (req, res) => {
  const data = await Product.find(req.query).select("name");
  //const data = await Product.find(req.query).sort("-name"); // by default order is ascending. put - before field name for descending like -name, sort("name -price") for multi cols. in url it will be typed as sort=name,price
  //const data = await Product.find(req.query); // req.query used for searching,sorting,filtering and pagination. here it means param in url can also filter data
  // & sign can use in url for multi filter criteria
  console.log("user searched for: ", req.query);
  res.status(200).json({ data });
};

module.exports = { getAllProducts, getAllProductsTesting };
