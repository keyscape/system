const mongoose = require('mongoose');
const { Schema } = mongoose;

const optionSchema = new Schema({         	
    phases:	{
        type: [String],
        required: true,
    },
    diffToFinalC: Number
})

module.exports = mongoose.model('option', optionSchema);

