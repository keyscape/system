const mongoose = require('mongoose');
const { Schema } = mongoose;

const configSchema = new Schema({     
    updateNow: {
        type: Boolean,
        required: true,
    },		    
    isSite: {
        type: Boolean,
        required: true,
    },		
    nRows:	{
        type: {
            lg: {
                type: Number,
                required: true,
            },
            md: {
                type: Number,
                required: true,
            },
            sm: {
                type: Number,
                required: true,
            },
        },
        required: true,
    }
})

module.exports = mongoose.model('config', configSchema);

