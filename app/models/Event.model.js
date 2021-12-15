const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({         
    date: {
        type: String,
        required: true,
    },		
    local:	{
        type: String,
        required: true,
    },
    time:	{
        type: String,
        required: true,
    },
    room:	{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('event', eventSchema);

