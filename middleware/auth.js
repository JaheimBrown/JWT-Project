const {UnauthorizedError} = require('../errors');
const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    if(!authHeader){
        throw new UnauthorizedError('No token provided.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { ...decoded };
        next();
    } catch (error) {
        throw new UnauthorizedError('No authorization to access route.');
    }
}

module.exports = authMiddleware;