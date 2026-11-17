import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const product = mongoose.model('product', productSchema);

export default product;