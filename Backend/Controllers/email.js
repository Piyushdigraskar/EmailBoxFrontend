const Emails = require('../models/email');

function isStringInValid(String) {
    if (String == undefined || String.length === 0) {
        return true;
    } else {
        return false;
    }
}

const addEmail = async (req, res) => {
    try {
        const { to, subject, content } = req.body;
        if (isStringInValid(to) || isStringInValid(subject) || isStringInValid(content)) {
            return res.status(400).json({ err: 'bad parameters something is wrong' });
        }

        await Emails.create({
            to,
            subject,
            content,
            userId: req.user._id
        })
        res.status(201).json('Successfully Created Email');

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to create Email' })
    }
}

const ITEM_PER_PAGE = 3;
const getEmails = async (req, res) => {
    const page = +req.query.page || 1;
    const userId = req.user;
    try {
        const totalEmails = await Emails.countDocuments({ userId: userId });

        const allEmails = await Emails.find({ userId: userId })
            .skip((page - 1) * ITEM_PER_PAGE)
            .limit(ITEM_PER_PAGE);

        res.json({
            Emails: allEmails,
            currentPage: page,
            hasNextPage: ITEM_PER_PAGE * page < totalEmails,
            nextPage: page + 1,
            hasPreviousPage: page > 1,
            previousPage: page - 1,
            lastPage: Math.ceil(totalEmails / ITEM_PER_PAGE)
        })

    } catch (error) {
        console.log(err);
        return res.status(500).json({ error: err, success: false });
    }
}

const getEmail = async (req, res) => {
    const emailId = req.params.id; // Assuming the email ID is passed as a route parameter
    const userId = req.user;
    if (!emailId) {
        return res.status(400).json({ success: false, error: 'Email ID is required' });
    }

    try {
        const email = await Emails.findOne({ _id: emailId, userId: userId });

        if (!email) {
            return res.status(404).json({ error: 'Email not found' });
        }

        // You can customize the response format according to your requirements
        res.json({ email });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to get Email' });
    }
}

module.exports = {
    addEmail,
    getEmails,
    getEmail
}