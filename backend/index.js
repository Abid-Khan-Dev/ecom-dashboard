import express from 'express'
import cors from 'cors'
import connectDb from './config/dbConnect.js'
import Product from './models/Product.js'

const app = express()
connectDb()

app.use(cors())
app.use(express.json())

// ------------------------------Routes Start-----------------
app.post('/products', async (req, res) => {
    const { name, price } = req.body
    await Product.create({ name, price })
    return res.json({ msg: 'Product is created.' })
})

app.post('/updateProducts', async (req, res) => {
    const { name, price, _id } = req.body
    await Product.findByIdAndUpdate(_id, { name, price })
    return res.json({ msg: 'Product is Updated.' })
})

app.post('/deleteProduct', async (req, res) => {
    const { id } = req.body
    await Product.findByIdAndDelete(id)
    return res.json({ msg: 'Product is Deleted.' })
})


app.get('/products', async (req, res) => {

    const products = await Product.find()
    return res.json(products)
})

// ------------------------------Routes End-----------------

app.listen(4000, () => {
    console.log("Backend is running.");

})