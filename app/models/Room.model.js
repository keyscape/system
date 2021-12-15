const mongoose = require('mongoose');
const { Schema } = mongoose;

const roomSchema = new Schema({
    isActive: {
        type: Boolean,
        default: false,
        required: true,
    },
    sequence: {
        type: Number,
        default: -1,
        required: true,
    },	      
    roomId: {
        type: String,
        required: true,
    },		
    name:	{
        type: String,
        required: true,
    },
    theme:	{
        type: String,
        required: true,
    },
    description:	{
        type: String,
        required: true,
    },
    imageFull:	{
        type: String,
        required: true,
    },
    imageThumb:	{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('room', roomSchema);

