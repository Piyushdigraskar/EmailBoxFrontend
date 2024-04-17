const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmailSchema = new Schema({
    to:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    content:{
        type:String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    bluetick: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Emails', EmailSchema);