const mongoose = require('mongoose');
const { Schema } = mongoose;

const omegaSchema = new Schema({	
    module: {
        type: {
            name: String,
            letter: String,
        }
    },
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

/* 
    3.141...
    2.718...
    1.618...
    2.414...
    raiz(-1)

*/