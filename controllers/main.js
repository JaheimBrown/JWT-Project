const {BadRequestError} = require('../errors');
const jwt = require('jsonwebtoken');

const dashBoard = (req,res) => {
    const { username } = req.user;
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({msg:`Hello ${username}, your lucky number is: ${luckyNumber}`});
}

const login = (req,res) => {
    const {username, password} = req.body;

    if(!username || !password) {
        throw new BadRequestError('Please enter username and password');
    }

    const id = new Date().getDate();

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'});

    res.status(200).json({msg: "user created", token});
}

module.exports = {dashBoard, login};