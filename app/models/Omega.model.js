const mongoose = require('mongoose');
const { Schema } = mongoose;

const omegaSchema = new Schema({	
    question:	{
        type: String,
        required: true,
    },
    alternatives:	{
        type: [{
            letter: {
                type: String,
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
            value: {
                type: [Number],
                required: true,
            }
        }],
        required: true,
    },
})

module.exports = mongoose.model('omega', omegaSchema);

