require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const products_route = require("./routes/products");
const users_route = require("./routes/users");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("server is live!!!");
});

// middleware or to set router
app.use("/api/products", products_route);
app.use("/api/users", users_route);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server running on Port ${PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

start();
