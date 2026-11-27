import express from 'express'
import cors from 'cors'
import connectDb from './config/dbConnect.js'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cookieParser from 'cookie-parser'

const app = express()
connectDb()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

// ------------------------------Routes Start-----------------
app.use('/', productRoutes)
app.use('/', categoryRoutes)
app.use('/', authRoutes)


// ------------------------------Routes End-----------------

app.listen(4000, () => {
    console.log("Backend is running.");

})