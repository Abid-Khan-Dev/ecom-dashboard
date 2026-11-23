import express from "express"
import Category from "../models/Category.js"

const router = express.Router()



router.post('/categories', async (req, res) => {
    const { name, price } = req.body
    await Category.create({ name, price })
    return res.json({ msg: 'Category is created.' })
})

router.post('/updateCategory', async (req, res) => {
    const { name, price, _id } = req.body
    await Category.findByIdAndUpdate(_id, { name, price })
    return res.json({ msg: 'Category is Updated.' })
})

router.post('/deleteCategory', async (req, res) => {
    const { id } = req.body
    await Category.findByIdAndDelete(id)
    return res.json({ msg: 'Category is Deleted.' })
})


router.get('/categories', async (req, res) => {

    const category = await Category.find()
    return res.json(category)
})





export default router