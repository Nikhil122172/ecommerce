// const { default: mongoose } = require("mongoose");
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})

const ProductData = mongoose.model("ProductData",productSchema);
// module.exports = ProductData;
export default ProductData;