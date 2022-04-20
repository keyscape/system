const mongoose = require('mongoose');
const { Schema } = mongoose;

const voiceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    intro:	{
        type: String,
        required: true,
    },
    omega:	{
        type: String,
        required: true,
    },
    finalA:	{
        type: String,
        required: true,
    },
    finalB:	{
        type: String,
        required: true,
    },
    finalC:	{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('voice', voiceSchema);

