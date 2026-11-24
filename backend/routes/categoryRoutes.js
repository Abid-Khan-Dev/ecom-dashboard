import express from "express"
import Category from "../models/Category.js"

const router = express.Router()



router.post('/categories', async (req, res) => {
    const { name, price } = req.body
    await Category.create({ name, price })
    return res.status(201).json({ msg: 'Category is created.' })
})

router.post('/updateCategory', async (req, res) => {
    const { name, price, _id } = req.body
    await Category.findByIdAndUpdate(_id, { name, price })
    return res.status(200).json({ msg: 'Category is Updated.' })
})

router.post('/deleteCategory', async (req, res) => {
    const { id } = req.body
    await Category.findByIdAndDelete(id)
    return res.status(200).json({ msg: 'Category is Deleted.' })
})


router.get('/categories', async (req, res) => {
    try {
        const category = await Category.find()
        return res.status(200).json(category)

    } catch (error) {
        return res.status(500).json({ msg: 'try again later.' })
    }

})





export default router