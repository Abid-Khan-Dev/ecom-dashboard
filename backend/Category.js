import mongoose from "mongoose";




const categorySchema = new mongoose.Schema({
    name: String
})


const category = mongoose.model('category', categorySchema)

export default category