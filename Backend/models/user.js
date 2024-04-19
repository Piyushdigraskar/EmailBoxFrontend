const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    totalMails: {
        type: Number,
        default: 0
    }
})


module.exports = mongoose.model('Users', userSchema);