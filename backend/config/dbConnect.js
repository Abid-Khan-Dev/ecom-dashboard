import mongoose from "mongoose"



const connectDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/dashboard')
    console.log('Mongodb is connected');

}


export default connectDb