import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    categoryId: String
});

const Product = mongoose.model('product', productSchema);

export default Product;