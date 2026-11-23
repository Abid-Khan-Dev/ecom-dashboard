import express from 'express'
import cors from 'cors'
import connectDb from './config/dbConnect.js'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'



const app = express()
connectDb()

app.use(cors())
app.use(express.json())

// ------------------------------Routes Start-----------------
app.use('/', productRoutes)
app.use('/', categoryRoutes)


// ------------------------------Routes End-----------------

app.listen(4000, () => {
    console.log("Backend is running.");

})