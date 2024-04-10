const jwt = require('jsonwebtoken');

const User = require('../models/user');

const authenticate = (req, res, next)=>{
    try {
        const token = req.header('Authorization');
        console.log(token);
        const user = jwt.verify(token, 'secretkey');
        console.log(user, 'user String');
        User.findById(user.userId).then(user => {
            console.log(JSON.stringify(user));
            req.user = user; 
            next(); 
        })
    } catch (error) {
        return res.status(401).json(error);
    }
}

module.exports = {
    authenticate
}