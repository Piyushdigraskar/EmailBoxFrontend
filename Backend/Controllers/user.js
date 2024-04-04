const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const Users = require('../models/user');


function isStringInValid(String) {
    if (String == undefined || String.length === 0) {
        return true;
    } else {
        return false;
    }
}

const signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (isStringInValid(email) || isStringInValid(password)) {
            return res.status(400).json({ err: 'bad parameters something is wrong' });
        }

        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            await Users.create({ email, password: hash });
            res.status(201).json({ message: 'Successfully Created user' });
        })

    } catch (error) {
        console.log('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
}

const generateAccessToken = (id) => {
    return jwt.sign({ userId: id }, 'secretkey');
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (isStringInValid(email) || isStringInValid(password)) {
            return res.status(400).json({ err: 'bad parameters something is wrong' });
        }

        const user = await Users.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ error: "Email not registered. Please sign up" });
        }

        const result = await bcrypt.compare(password, user.password);
        if (result) {
            const token = generateAccessToken(user._id);
            return res.status(200).json({ Message: 'user successfully logged in', token: token })
        }
        else {
            return res.status(400).json({ message: "Incorrect password" });
        }
    } catch (error) {
        res.status(500).json({ message: err, success: false })
    }
}

module.exports = {
    signUp,
    generateAccessToken,
    login
}