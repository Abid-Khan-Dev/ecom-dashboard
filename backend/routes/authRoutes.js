import express from 'express'
import Product from '../models/Product.js'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

const mykeyPassword = 'key@1234'

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ msg: 'All fields are required.' })
        }
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(409).json({ msg: 'Email aready exists' })
        }


        await User.create({ name, email, password })
        return res.status(201).json({ msg: "User is Created." })

    } catch (error) {
        return res.status(500).json({ msg: 'Try again later.' })
    }

})


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ msg: 'All fields are required.' })
        }
        const existingUser = await User.findOne({ email })

        if (!existingUser) {
            return res.status(404).json({ msg: 'User not found' })
        }

        if (existingUser.password !== password) {
            return res.status(400).json({ msg: 'Password is not correct' })
        }

        const token = jwt.sign({ userId: existingUser._id }, mykeyPassword)
        console.log(token);
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict'

        })
        return res.status(200).json({ msg: "Successful." })

    } catch (error) {
        return res.status(500).json({ msg: 'Try again later.' })
    }
})

// router.get('/products', async (req, res) => {

//     return res.status(200).json(products)
// })




export default router