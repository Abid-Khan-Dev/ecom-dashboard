import express from 'express'
import cors from 'cors'
import connectDb from './dbConnect.js'


const app = express()

connectDb()

app.use(cors())
app.use(express.json())

// ------------------------------Routes Start-----------------

// ------------------------------Routes End-----------------

app.listen(4000, () => {
    console.log("Backend is running.");

})