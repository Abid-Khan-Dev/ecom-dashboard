import jwt from 'jsonwebtoken'


const checktoken = (req, res, next) => {
    try {
        const token = req.cookies.jwtToken
        if (!token) {
            return res.status(401).json({ msg: 'Token is required.' })
        }
        const decoded = jwt.verify(token, 'key@1234')
        req.user = decoded.userId
        console.log(decoded.userId);
        next()
    } catch (error) {
        return res.status(401).json({ msg: 'Invalid Token.' })
    }
}


export default checktoken