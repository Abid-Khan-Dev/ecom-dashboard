import express from 'express'
import Product from '../models/Product.js'
import checktoken from '../middlewares/checkToken.js'


const router = express.Router()



router.post('/products', async (req, res) => {
    const { name, price, category } = req.body
    await Product.create({ name, price, categoryId: category })
    return res.status(201).json({ msg: 'Product is created.' })
})

router.post('/updateProducts', async (req, res) => {
    const { name, price, _id } = req.body
    await Product.findByIdAndUpdate(_id, { name, price })
    return res.status(200).json({ msg: 'Product is Updated.' })
})

router.post('/deleteProduct', async (req, res) => {
    const { id } = req.body
    await Product.findByIdAndDelete(id)
    return res.status(200).json({ msg: 'Product is Deleted.' })
})


router.get('/products', checktoken, async (req, res) => {
    console.log(req.user, 'from get products');

    const products = await Product.find().populate('categoryId')
    return res.status(200).json(products)
})




export default router