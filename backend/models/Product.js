import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
});

const Product = mongoose.model('product', productSchema);

export default Product;