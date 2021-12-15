const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({         
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
    name:	{
        type: String,
        required: true,
    },
    image:	{
        type: String,
        default: ''
    },
    role:	{
        type: String,
        required: true,
    },
    email:	{
        type: {
            emailStart: {
                type: String,
                default: '',
                required: true,
            },
            emailEnd: {
                type: String,
                default: '',
                required: true,
            },
            emailFull: {
                type: String,
                default: '',
                required: true,
            }
        },
        required: true,
    },
    social:	{
        type: {
            lattes: {
                type: String
            },
            fb: {
                type: String
            },
            ig: {
                type: String
            },
            lk: {
                type: String
            },
            tt: {
                type: String
            }
        },
        required: true,
    }
})

module.exports = mongoose.model('team', teamSchema);

