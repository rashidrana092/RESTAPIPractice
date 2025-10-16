require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products");

const ProductsData = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany(); // to delete existing data

    await Product.create(ProductsData);
    console.log("Product data added successfully");
  } catch (error) {
    console.log("Error", error);
  }
};

start();
