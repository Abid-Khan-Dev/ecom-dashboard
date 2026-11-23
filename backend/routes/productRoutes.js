import express from 'express'
import Product from '../models/Product.js'


const router = express.Router()



router.post('/products', async (req, res) => {
    const { name, price, category } = req.body
    await Product.create({ name, price, categoryId: category })
    return res.json({ msg: 'Product is created.' })
})

router.post('/updateProducts', async (req, res) => {
    const { name, price, _id } = req.body
    await Product.findByIdAndUpdate(_id, { name, price })
    return res.json({ msg: 'Product is Updated.' })
})

router.post('/deleteProduct', async (req, res) => {
    const { id } = req.body
    await Product.findByIdAndDelete(id)
    return res.json({ msg: 'Product is Deleted.' })
})


router.get('/products', async (req, res) => {

    const products = await Product.find().populate('categoryId')
    return res.json(products)
})




export default router