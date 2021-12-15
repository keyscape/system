const mongoose = require('mongoose');
const { Schema } = mongoose;

const moduleSchema = new Schema({         
    name: {
        type: String,
        required: true,
    },		
    letter:	{
        type: String,
        required: true,
    },
    phase:	{
        type: Number,
        required: true,
    },
    isDone:	{
        type: Boolean,
        default: false,
        required: true,
    },
    content: {},
    resContent: {}
})

module.exports = mongoose.model('module', moduleSchema);

