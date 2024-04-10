const Emails = require('../models/email');

function isStringInValid(String) {
    if (String == undefined || String.length === 0) {
        return true;
    } else {
        return false;
    }
}

const addEmail = async(req, res)=>{
    try {
        const {to, subject, content} = req.body;
        if(isStringInValid(to) || isStringInValid(subject) || isStringInValid(content)){
            return res.status(400).json({ err: 'bad parameters something is wrong' });
        }

        await Emails.create({
            to,
            subject,
            content,
            userId: req.user._id
        })
        res.status(201).json('Successfully Created Email' );

    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Failed to create Email'})
    }
}

module.exports = {
    addEmail
}