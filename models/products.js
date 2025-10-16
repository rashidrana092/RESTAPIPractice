const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: { type: Number, required: [true, "Price must be provided"] },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: { type: Number, default: 4.5 },
  createdAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    enum: {
      // this enum means to support only some companies whoes product can add.
      values: ["Apple", "Vivo", "Huawei"],
      message: `This product is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", ProductSchema); // name should be singular here
