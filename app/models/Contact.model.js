const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({         
    name: {
        type: String,
        required: true,
    },		
    link:	{
        type: String,
        required: true,
    },
    logo:	[{
        type: String,
        required: true,
    }]
})

module.exports = mongoose.model('contact', contactSchema);

