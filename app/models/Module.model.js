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
        type: String,
        required: true,
    },
    isDone:	{
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model('module', moduleSchema);

