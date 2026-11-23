import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    categoryId: mongoose.Schema.Types.ObjectId
});

const Product = mongoose.model('product', productSchema);

export default Product;