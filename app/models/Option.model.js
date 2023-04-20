const mongoose = require('mongoose');
const { Schema } = mongoose;

const optionSchema = new Schema({         	
    phases:	{
        type: [String],
        required: true,
    },
    diffToFinalC: Number,
    formLink: String
})

module.exports = mongoose.model('option', optionSchema);

